import { Module } from '@nestjs/common'
import { SongModule } from '@song/SongModule'

@Module({
  imports: [SongModule]
})
export class AppModule {}
