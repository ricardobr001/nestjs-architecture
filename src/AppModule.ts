import { Module } from '@nestjs/common'
import { HelloWorldController } from './http/controller/HelloWorldController'
import { AppService } from './application/AppService'

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [AppService]
})
export class AppModule {}
