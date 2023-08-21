import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}
  @Get()
  getHello(): any {
    return this.configService.get('name')
  }
}
