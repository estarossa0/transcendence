import { NotFoundException, UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
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
}
