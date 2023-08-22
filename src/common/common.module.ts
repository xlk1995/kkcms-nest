import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModule } from '@nestjs/config'
import config from '../config'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CommonModule {}
