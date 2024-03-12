import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  getDynamicData(): any[] {
    throw new Error('Method not implemented.');
  }
  getData(): string {
    return 'Dynamic Data';
  }
}
