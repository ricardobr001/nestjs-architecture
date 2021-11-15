import { SongEntity } from '@domain/entity/SongEntity'
import { SongRepository } from '@infrastructure/SongRepository'
import { SongResponse } from '@response/SongResponse'
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
