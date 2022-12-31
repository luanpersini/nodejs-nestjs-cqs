import { InfrastructureModule } from '@infrastructure/infrastructure.module'
import { Module } from '@nestjs/common'
import { AccountModule } from './modules/account/account.module'

const modules = [AccountModule]

@Module({
  imports: [InfrastructureModule, ...modules],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
