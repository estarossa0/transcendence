import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { graphqlUploadExpress } from "graphql-upload";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 1 }));
  app.useStaticAssets(join(__dirname, "..", "public"), { prefix: "/assets" });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
