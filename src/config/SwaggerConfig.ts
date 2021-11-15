import { DocumentBuilder } from '@nestjs/swagger'

export const SwaggerOptions = new DocumentBuilder()
  .setTitle('Letras')
  .setDescription('documentação da API')
  .setVersion('1.0')
  .build()
