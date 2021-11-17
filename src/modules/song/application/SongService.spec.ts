import { SongEntity } from '@song/domain/entity/SongEntity'
import { SongResponse } from '@song/http/response/SongResponse'
import { SongRepository } from '@song/infrastructure/SongRepository'
import * as faker from 'faker'
import { SongService } from './SongService'

describe('application-SongService', () => {
  const songRepository = new SongRepository()
  const songService = new SongService(songRepository)

  describe('getSongLyric', () => {
    it('should get artist lyric and return the lyric as an array of strings', async () => {
      const artist = faker.name.findName()
      const title = faker.random.words()
      const songEntityMock = new SongEntity(artist, title, faker.lorem.paragraphs())
      const shouldReturn: SongResponse = { ...songEntityMock, lyric: songEntityMock.lyric.split('\n') }

      songRepository.getSongLyric = jest.fn().mockResolvedValue(songEntityMock)

      const returned = await songService.getSongLyric(artist, title)

      expect(songRepository.getSongLyric).toHaveBeenCalledTimes(1)
      expect(songRepository.getSongLyric).toHaveBeenCalledWith(artist, title)
      expect(returned).toEqual(shouldReturn)
    })
  })
})
