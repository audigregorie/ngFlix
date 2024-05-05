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

  public show$: Observable<Movie> | null = null
  public showCast$: Observable<Actor[]> | null = null
  public showImages$: Observable<Image[]> | null = null

  public imagesSizes = IMAGES_SIZES
  public showId = ''
  public showSimilarShows$: Observable<Movie[]> | null = null
  public showType: 'movie' | 'tv' = 'movie'
  public showVideos$: Observable<Video[]> | null = null

  constructor() {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.showId = params['id']
      this.showType = params['type']

      if (this.showType === 'movie') {
        this.show$ = this.moviesService.getMovieById(this.showId)
        this.showVideos$ = this.moviesService.getMovieVideos(this.showId)
        this.showImages$ = this.moviesService.getMovieImages(this.showId)
        this.showCast$ = this.moviesService.getMovieCast(this.showId)
        this.showSimilarShows$ = this.moviesService.getSimilarMovies(this.showId)
      }

      if (this.showType === 'tv') {
        this.show$ = this.tvshowsService.getTvshowById(this.showId).pipe(map(mapToMovie))
        this.showVideos$ = this.tvshowsService.getTvshowVideos(this.showId)
        this.showImages$ = this.tvshowsService.getTvshowImages(this.showId)
        this.showCast$ = this.tvshowsService.getTvshowCast(this.showId)
        this.showSimilarShows$ = this.tvshowsService.getSimilarTvshows(this.showId).pipe(map(mapToMovies))
      }
    })
  }
}
