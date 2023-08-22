import { Inject, Injectable } from '@nestjs/common'
import config from '../config'
import { ConfigType } from '@nestjs/config'

@Injectable()
export class ConfigService {
  constructor(@Inject(config.KEY) public data: ConfigType<typeof config>) {}

  public get(key: keyof ConfigType<typeof config>) {
    return this.data[key]
  }
}
