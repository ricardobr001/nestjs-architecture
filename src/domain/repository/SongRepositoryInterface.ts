import { SongEntity } from '@domain/entity/SongEntity'

export interface SongRepositoryInterface {
  getSongLyric(artist: string, title: string): Promise<SongEntity>
}
