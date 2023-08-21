import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
// import { ConfigService } from '@nestjs/config'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    // return this.configService.get('name')
    return process.env.APP_NAME
  }
}
