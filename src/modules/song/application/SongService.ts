import { Injectable } from '@nestjs/common'
import { SongResponse } from '@song/http/response/SongResponse'
import { SongRepository } from '@song/infrastructure/SongRepository'

@Injectable()
export class SongService {
  constructor(private readonly songRepository: SongRepository) {}

  async getSongLyric(artist: string, title: string): Promise<SongResponse> {
    const song = await this.songRepository.getSongLyric(artist, title)

    return {
      artist: song.artist,
      title: song.title,
      lyric: this.transformSongLyricToArrayOfPhrases(song.lyric)
    }
  }

  private transformSongLyricToArrayOfPhrases(lyric: string): string[] {
    return lyric.split('\n')
  }
}
