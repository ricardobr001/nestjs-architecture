import { AXIOS_TIMEOUT, FIRST_POSITION, VAGALUME_API_URL } from '@core/constants'
import { SongEntity } from '@domain/entity/SongEntity'
import { SongRepositoryInterface } from '@domain/repository/SongRepositoryInterface'
import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { VagalumeResponse } from './VagalumeResponse'

@Injectable()
export class SongRepository implements SongRepositoryInterface {
  private readonly axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({ timeout: AXIOS_TIMEOUT, baseURL: VAGALUME_API_URL })
  }

  async getSongLyric(artist: string, title: string): Promise<SongEntity> {
    const { data } = await this.axiosInstance.get<VagalumeResponse>(`search.php?&art=${artist}&mus=${title}`)

    return new SongEntity(data.art.name, data.mus[FIRST_POSITION].name, data.mus[FIRST_POSITION].text)
  }
}
