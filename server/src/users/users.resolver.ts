import {
  InternalServerErrorException,
  NotFoundException,
  UseGuards,
} from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { GqlAuthGuard } from "src/auth/auth.guard";
import { requestUser } from "./dto/user-types";
import { user } from "./models/users.model";
import { CurrentUser } from "./users.decorator";
import { UsersService } from "./users.service";

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

  @Query(() => user)
  async me(@CurrentUser() reqUser: requestUser) {
    const user = await this.userService.getOne({ id: reqUser.sub });
    if (!user) throw new NotFoundException();
    return user;
  }

  @Mutation(() => user)
  async changeDisplayName(
    @Args("newName") newName: string,
    @CurrentUser() reqUser: requestUser,
  ) {
    const user = this.userService
      .updateUser({
        where: { id: reqUser.sub },
        data: { name: { set: newName } },
      })
      .catch((err: PrismaClientKnownRequestError) => {
        throw new InternalServerErrorException(
          `failed to update with prisma, code: ${err.code}`,
        );
      });
    return user;
  }
}
