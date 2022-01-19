import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { ConfigModule } from "@nestjs/config";
import { UserResolver } from "./users.resolver";

@Module({
  imports: [ConfigModule],
  controllers: [UsersController],
  providers: [UsersService, UserResolver, PrismaService],
})
export class UsersModule {}
