import { SongRepository } from '@infrastructure/SongRepository'
import { Injectable } from '@nestjs/common'
import { SongResponse } from '@response/SongResponse'

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
