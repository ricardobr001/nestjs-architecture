import { NestFactory } from '@nestjs/core'
import { AppModule } from './AppModule'
import { SwaggerModule } from '@nestjs/swagger'
import { SwaggerOptions } from './config/SwaggerConfig'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const document = SwaggerModule.createDocument(app, SwaggerOptions)
  SwaggerModule.setup('docs', app, document)

  await app.listen(3000)
}

bootstrap()
