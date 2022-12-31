import { CustomHttpClient } from '@infrastructure/http/CustomHttpClient'
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { databaseProviders } from './data/database.providers'

const customHttpClient = {
  provide: 'ICustomHttpClient',
  useClass: CustomHttpClient
}

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [...databaseProviders,customHttpClient],
  exports: [customHttpClient]
})
export class InfrastructureModule {}
