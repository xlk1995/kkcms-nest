import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigService } from './common/config.service'
// import { ConfigService } from '@nestjs/config'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly config: ConfigService) {}

  @Get()
  getHello(): any {
    // return this.configService.get('name')
    return this.config.data.name
  }
}
