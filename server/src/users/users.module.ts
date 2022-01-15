import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserController } from "./create-user/create-user.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [CreateUserController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
