import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticService {
  getData(): string {
    return 'Static Data';
  }
}
