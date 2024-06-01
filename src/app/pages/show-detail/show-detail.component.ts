import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Actor } from '../../types/credits'
import { IMAGES_SIZES } from '../../constants/images-sizes'
import { Image } from '../../types/image'
import { mapToMovie, mapToMovies } from '../../types/tvshow'
import { Movie } from '../../types/movie'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { TvshowsService } from '../../services/tvshows.service'
import { Video } from '../../types/video'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute)
  private moviesService = inject(MoviesService)
  private tvshowsService = inject(TvshowsService)

  public media$: Observable<Movie> | null = null
  public mediaCast$: Observable<Actor[]> | null = null
  public mediaImages$: Observable<Image[]> | null = null

  public imagesSizes = IMAGES_SIZES
  public mediaId = ''
  public mediaSimilarShows$: Observable<Movie[]> | null = null
  public mediaType: 'movie' | 'tv' = 'movie'
  public mediaVideos$: Observable<Video[]> | null = null

  constructor() {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        map((params) => {
          this.mediaId = params['id']
          this.mediaType = params['type']

          if (this.mediaType === 'movie') {
            this.media$ = this.moviesService.getMovieById(this.mediaId)
            this.mediaVideos$ = this.moviesService.getMovieVideos(this.mediaId)
            this.mediaImages$ = this.moviesService.getMovieImages(this.mediaId)
            this.mediaCast$ = this.moviesService.getMovieCast(this.mediaId)
            this.mediaSimilarShows$ = this.moviesService.getSimilarMovies(this.mediaId)
          }

          if (this.mediaType === 'tv') {
            this.media$ = this.tvshowsService.getTvshowById(this.mediaId).pipe(map(mapToMovie))
            this.mediaVideos$ = this.tvshowsService.getTvshowVideos(this.mediaId)
            this.mediaImages$ = this.tvshowsService.getTvshowImages(this.mediaId)
            this.mediaCast$ = this.tvshowsService.getTvshowCast(this.mediaId)
            this.mediaSimilarShows$ = this.tvshowsService.getSimilarTvshows(this.mediaId).pipe(map(mapToMovies))
          }
        }),
      )
      .subscribe()
  }
}
