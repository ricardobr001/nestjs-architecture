import { Module } from '@nestjs/common'
import { SongController } from '@controller/SongController'
import { SongService } from '@application/SongService'
import { SongRepository } from '@infrastructure/SongRepository'

@Module({
  imports: [],
  controllers: [SongController],
  providers: [SongService, SongRepository]
})
export class AppModule {}
