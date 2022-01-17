import {
  Body,
  Controller,
  InternalServerErrorException,
  Param,
  Post,
  UnprocessableEntityException,
} from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly user: UsersService) {}

  @Post(":id")
  async newLoggin(@Param("id") id: string, @Body("user") user) {
    if (!user || !user.nickname) throw new UnprocessableEntityException();

    const createdUser = await this.user.createUser({
      id: id,
      name: user.nickname,
    });

    if (!createdUser)
      throw new InternalServerErrorException({}, "Failed to create a user");
    return createdUser;
  }
}
