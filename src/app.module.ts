import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

// import { ConfigModule } from './config/config.module'
import { CommonModule } from './common/common.module'
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CommonModule],
})
export class AppModule {}
