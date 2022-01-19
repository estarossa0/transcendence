import { NotFoundException, UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "src/auth/auth.guard";
import { user } from "./models/users.model";
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
}
