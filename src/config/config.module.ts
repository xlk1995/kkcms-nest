import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModule as BaseModule } from '@nestjs/config'
import config from '../config'
import { ConfigController } from './config.controller'

@Global()
@Module({
  imports: [
    BaseModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
})
export class ConfigModule {}
