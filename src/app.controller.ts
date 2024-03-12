import { Controller, Get, Res } from '@nestjs/common';
import { StaticService } from './static/static.service';
import { DynamicService } from './dynamic/dynamic.service';
import { Response } from 'express';

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

  @Get()
  get(@Res() res: Response) {
    res.sendFile('index.html', {
      root: '../src/views',
    });
  }

  @Get('dynamic')
  getDynamicData(): string {
    return this.dynamicService.getData();
  }
}
