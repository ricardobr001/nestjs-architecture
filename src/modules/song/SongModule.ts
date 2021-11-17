import { Module } from '@nestjs/common'
import { SongService } from './application/SongService'
import { SongController } from './http/controller/SongController'
import { SongRepository } from './infrastructure/SongRepository'
import { SongPresentation } from './presentation/SongPresentation'

@Module({
  controllers: [SongController],
  providers: [SongPresentation, SongService, SongRepository],
  exports: [SongPresentation]
})
export class SongModule {}
