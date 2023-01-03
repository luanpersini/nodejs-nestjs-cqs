import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function SetupSwagger(app: INestApplication)
{
  const options = new DocumentBuilder()
    .setTitle('Standard-api')
    .setDescription('Standard Backend')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)
}