import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { RouterModule } from "@nestjs/core";

@Module({
  imports: [
    RouterModule.register([
      {
        path: "users",
        module: UsersModule,
      },
    ]),
    UsersModule,
  ],
})
export class AppModule {}
