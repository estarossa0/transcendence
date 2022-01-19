import {
  Body,
  Controller,
  InternalServerErrorException,
  Param,
  Post,
  UnprocessableEntityException,
  UseGuards,
} from "@nestjs/common";
import { SecretAuthGuard } from "./secret-auth.guard";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly user: UsersService) {}

  @Post(":id")
  @UseGuards(SecretAuthGuard)
  async newLoggin(@Param("id") id: string, @Body("user") user) {
    if (!user || !user.nickname) throw new UnprocessableEntityException();

    const createdUser = await this.user.createUser({
      id: id,
      displayName: user.nickname,
    });

    if (!createdUser)
      throw new InternalServerErrorException({}, "Failed to create a user");
    return createdUser;
  }
}
