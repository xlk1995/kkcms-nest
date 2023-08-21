import { Controller, Get, Inject } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import config from '../config'

@Controller('config')
export class ConfigController {
  constructor(@Inject(config.KEY) private conf: ConfigType<typeof config>) {}
  @Get()
  getHello(): any {
    return this.conf.name
  }
}
