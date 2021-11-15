import { SongService } from '@application/SongService'
import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common'
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger'
import { Response } from 'express'
import { SongResponse } from '@response/SongResponse'

@Controller('v1/song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  @ApiOperation({ summary: 'Recupera a letra de uma música dado um artista e o título da música deste artista' })
  @ApiOkResponse({ type: SongResponse })
  async getSongLyric(@Query('artist') artist: string, @Query('title') title: string, @Res() res: Response) {
    const lyric = await this.songService.getSongLyric(artist, title)

    res.status(HttpStatus.OK).send(lyric)
  }
}
