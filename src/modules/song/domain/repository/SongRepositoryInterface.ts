import { SongEntity } from '@song/domain/entity/SongEntity'

export interface SongRepositoryInterface {
  getSongLyric(artist: string, title: string): Promise<SongEntity>
}
