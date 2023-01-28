import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  await app.listen(Number(process.env.FLEX_DATABASE_PORT), `${process.env.FLEX_DATABASE_HOSTNAME}`);
  console.log(`[HTTP] : ${process.env.FLEX_DATABASE_HOST} :`, await app.getHttpServer().address());
  console.log(`${process.env.FLEX_SERVER_RUNNING} ${process.env.FLEX_DATABASE_HOST}`)
}
bootstrap();
