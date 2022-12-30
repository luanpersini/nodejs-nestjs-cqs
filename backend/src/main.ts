import envConfig from '@config/EnvConfig'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { HttpExceptionFilter } from '@presentation/filters/HttpExceptionFilter'
import { ErrorsInterceptor } from '@presentation/interceptors/ErrorsInterceptor'
import { SetupSwagger } from '@presentation/setup/SetupSwagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new ErrorsInterceptor())

  SetupSwagger(app)

  await app.listen(envConfig.port)
}

bootstrap().then(() => console.log(`server running at port ${envConfig.port}`))
