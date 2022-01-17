import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { RouterModule } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    RouterModule.register([
      {
        path: "users",
        module: UsersModule,
      },
    ]),
    ConfigModule.forRoot({
      cache: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
