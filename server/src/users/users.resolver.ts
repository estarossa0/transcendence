import {
  InternalServerErrorException,
  NotFoundException,
  UseGuards,
} from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { GqlAuthGuard } from "src/auth/auth.guard";
import { user } from "./models/users.model";
import { UsersService } from "./users.service";
import { CurrentUser } from "./users.decorator";
import { GraphQLUpload, FileUpload } from "graphql-upload";
import { createWriteStream } from "fs";
import { unlink } from "fs/promises";

@Resolver(() => user)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query(() => user, { nullable: true })
  async user(@Args("id") id: string) {
    const user = await this.userService.getOne({ id: id });
    if (!user) throw new NotFoundException();
    return user;
  }

  @Mutation(() => user)
  async changeDisplayName(
    @Args("newName") newName: string,
    @CurrentUser("sub") id,
  ) {
    const user = this.userService
      .updateUser({
        where: { id: id },
        data: { displayName: { set: newName } },
      })
      .catch((err: PrismaClientKnownRequestError) => {
        throw new InternalServerErrorException(
          `failed to update with prisma, code: ${err.code}`,
        );
      });
    return user;
  }

  @Mutation(() => Boolean)
  async changeAvatar(
    @Args({ name: "file", type: () => GraphQLUpload })
    { createReadStream }: FileUpload,
    @CurrentUser("sub") id: string,
  ): Promise<boolean> {
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./public/${id}`))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false)),
    );
  }

  @Mutation(() => Boolean)
  async deleteAvatar(@CurrentUser("sub") id: string): Promise<boolean> {
    await unlink(`./public/${id}`).catch(() => {
      throw new NotFoundException();
    });
    return true;
  }
}
