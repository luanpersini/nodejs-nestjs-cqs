import { CustomHttpClient } from '@infrastructure/http/CustomHttpClient'
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AccountModel } from 'src/modules/account/data/AccountModel'
import { AccountOperationModel } from 'src/modules/account/data/AccountOperationModel'


export const models = [AccountModel, AccountOperationModel]

const customHttpClient = {
  provide: 'ICustomHttpClient',
  useClass: CustomHttpClient
}

@Module({
  imports: [SequelizeModule.forFeature(models), HttpModule],
  controllers: [],
  providers: [customHttpClient],
  exports: [customHttpClient]
})
export class InfrastructureModule {}
