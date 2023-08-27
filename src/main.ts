import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidatePipCustom } from './pipe/validate-pip-custom'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidatePipCustom())
  await app.listen(3000)
}
bootstrap()
