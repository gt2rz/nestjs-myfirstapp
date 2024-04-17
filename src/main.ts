import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // This will remove any additional properties that are not in the DTO
      forbidNonWhitelisted: true, // This will throw an error if there are additional properties that are not in the DTO
      // transform: true, // This will transform the incoming data to match the DTO
    }
  ));
  await app.listen(3000);
}
bootstrap();
