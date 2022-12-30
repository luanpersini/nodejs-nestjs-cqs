import { sequelizeConfig } from '@infrastructure/data/sequelize.config'
import { InfrastructureModule } from '@infrastructure/infrastructure.module'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AccountModule } from './modules/account/account.module'

const modules = [
  AccountModule
]

@Module({
  imports: [    
    SequelizeModule.forRoot(sequelizeConfig),
    InfrastructureModule,
    ...modules
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
