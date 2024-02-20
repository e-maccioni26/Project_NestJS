import { Module } from '@nestjs/common';
import { StaticModule } from './static/static.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { ExampleController } from './app.controller';

@Module({
  imports: [StaticModule, DynamicModule],
  controllers: [ExampleController],
})
export class AppModule {}
