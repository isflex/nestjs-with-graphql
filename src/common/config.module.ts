import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

console.log('FLEX_MODE', process.env.FLEX_MODE)

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: [`../env/public/.env.${process.env.FLEX_MODE}`],
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
