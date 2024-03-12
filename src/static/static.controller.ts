import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';

@Controller('static')
export class StaticController {
  @Get()
  getPage(@Res({ passthrough: true }) res: Response): void {
    const templatePath = path.resolve(__dirname, '../../public/assets/views/static.hbs');
    const template = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(template);
    const renderedHtml = compiledTemplate({ nom: 'Hello Static !' });

    res.set({ 'content-type': 'text/html' }).send(renderedHtml);
  }
}