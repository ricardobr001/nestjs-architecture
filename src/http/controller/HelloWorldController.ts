import { AppService } from '@application/AppService'
import { Controller, Get } from '@nestjs/common'

@Controller()
export class HelloWorldController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
