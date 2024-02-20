import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  getData(): string {
    return 'Dynamic Data';
  }
}
