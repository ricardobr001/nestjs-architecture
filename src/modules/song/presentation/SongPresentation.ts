import { Injectable } from '@nestjs/common'
import { SongService } from '@song/application/SongService'
import { SongResponse } from '@song/http/response/SongResponse'

@Injectable()
export class SongPresentation {
  constructor(private readonly songService: SongService) {}

  async getLyric(artist: string, title: string): Promise<SongResponse> {
    return await this.songService.getSongLyric(artist, title)
  }
}
