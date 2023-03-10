import { NestFactory } from '@nestjs/core';
import {AppModule} from "./src/modules/app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.PORT || 4000
  const app = await NestFactory.create(AppModule, {cors: true});

  const config = new DocumentBuilder()
      .setTitle('JWT Auth')
      .setDescription('The REST API description')
      .setVersion('0.0.1')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server stated on port: ${PORT}`));
}
bootstrap();
