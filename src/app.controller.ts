import { Controller, Get } from '@nestjs/common';
import { StaticService } from './static/static.service';
import { DynamicService } from './dynamic/dynamic.service';

@Controller('example')
export class ExampleController {
  constructor(
    private readonly staticService: StaticService,
    private readonly dynamicService: DynamicService,
  ) {}

  @Get('static')
  getStaticData(): string {
    return this.staticService.getData();
  }

  @Get('dynamic')
  getDynamicData(): string {
    return this.dynamicService.getData();
  }
}
