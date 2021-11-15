export class SongEntity {
  title: string
  artist: string
  lyric: string

  constructor(title: string, artist: string, lyric: string) {
    this.title = title
    this.artist = artist
    this.lyric = lyric
  }
}
