interface VagalumeArtist {
  readonly name: string
}

interface VagalumeMusic {
  readonly name: string
  readonly text: string
}

export interface VagalumeResponse {
  readonly art: VagalumeArtist
  readonly mus: VagalumeMusic[]
}
