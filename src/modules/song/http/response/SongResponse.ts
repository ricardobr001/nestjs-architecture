import { ApiProperty } from '@nestjs/swagger'

export class SongResponse {
  @ApiProperty({ example: 'blink-182' })
  artist: string

  @ApiProperty({ example: 'All The Small Things' })
  title: string

  @ApiProperty({ example: ['the lyric', 'of the song'] })
  lyric: string[]
}
