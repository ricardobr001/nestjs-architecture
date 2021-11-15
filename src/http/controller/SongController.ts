import { SongService } from '@application/SongService'
import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('v1/song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  async getSongLyric(@Query('artist') artist: string, @Query('title') title: string, @Res() res: Response) {
    console.log({ artist, title })
    const lyric = await this.songService.getSongLyric(artist, title)

    res.status(HttpStatus.OK).send(lyric)
  }
}
