import { Injectable, inject } from '@angular/core'
import { CreditsDto } from '../types/credits'
import { environment } from '../../environments/environment.development'
import { HttpClient, HttpParams } from '@angular/common/http'
import { ImagesDto } from '../types/image'
import { map } from 'rxjs'
import { Tvshow, TvshowsDto } from '../types/tvshow'
import { VideosDto } from '../types/video'

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private http = inject(HttpClient)

  private apiUrl = 'https://api.themoviedb.org/3'
  private baseParam = new HttpParams().set('api_key', environment.tmdbApiKey)

  constructor() {}

  // Get tvshows by type
  public getTvshowsByType(type: string, count = 20) {
    const params = this.baseParam
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${type}`, { params })
      .pipe(map((data) => data.results.slice(0, count)))
  }

  // Get tvshows by id
  public getTvshowById(id: string) {
    const params = this.baseParam
    return this.http.get<Tvshow>(`${this.apiUrl}/tv/${id}`, { params })
  }

  // Get tvshow videos
  public getTvshowVideos(id: string) {
    const params = this.baseParam
    return this.http.get<VideosDto>(`${this.apiUrl}/tv/${id}/videos`, { params }).pipe(map((data) => data.results))
  }

  // Get tvshow images
  public getTvshowImages(id: string) {
    const params = this.baseParam
    return this.http.get<ImagesDto>(`${this.apiUrl}/tv/${id}/images`, { params }).pipe(map((data) => data.backdrops))
  }

  // Get the tvshow cast
  public getTvshowCast(id: string) {
    const params = this.baseParam
    return this.http.get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits`, { params }).pipe(map((data) => data.cast))
  }

  // Get similar tvshows
  public getSimilarTvshows(id: string) {
    const params = this.baseParam
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${id}/similar`, { params })
      .pipe(map((data) => data.results.slice(0, 12)))
  }

  // Search tvshows
  public searchTvshows(page: number, searchValue?: string) {
    const params = this.baseParam.set('page', page.toString())
    const uri = searchValue ? '/search/tv' : '/tv/popular'
    return this.http.get<TvshowsDto>(`${this.apiUrl}${uri}?query=${searchValue}`, { params })
  }
}
