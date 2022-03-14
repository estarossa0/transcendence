import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { RouterModule } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AuthModule } from "./auth/auth.module";
import * as Joi from "joi";

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
      validationSchema: Joi.object({
        SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        AUTH0_ISSUER_URL: Joi.string().required(),
        AUTH0_AUDIENCE: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
