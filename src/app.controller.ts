import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//app con
@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
