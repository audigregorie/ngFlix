import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Genre, MoviesDto } from '../../types/movie'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { TvshowsService } from '../../services/tvshows.service'
import { mapToMoviesDto } from '../../types/tvshow'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute)
  private moviesService = inject(MoviesService)
  private tvshowsService = inject(TvshowsService)

  public genres$: Observable<Genre[]> | null = null
  public media$: Observable<MoviesDto> | null = null

  public mediaType: 'movie' | 'tv' = 'movie'
  public genreId = ''
  public isActiveMovies: boolean = true
  public isActiveTvshows: boolean = false

  constructor() {}

  // Get the movie genres. Get the id of the genre as an activated route param. Initialize the component with the first page.
  ngOnInit() {
    this.genres$ = this.moviesService.getMovieGenres()
    this.activeRoute.params.subscribe((params) => {
      this.genreId = params['genreId']
      this.onPageChange(1)
    })
  }

  // Toggle between movie and tvshow.
  public toggleActive(media: 'movie' | 'tv') {
    this.mediaType = media
    this.isActiveMovies = media === 'movie'
    this.isActiveTvshows = media === 'tv'
    this.onPageChange(1)
  }

  // Get media by genre based on the media selected.
  public onPageChange(page: number) {
    this.mediaType === 'movie'
      ? (this.media$ = this.moviesService.getMoviesByGenre(page, this.genreId))
      : (this.media$ = this.tvshowsService.getTvshowsByGenre(page, this.genreId).pipe(map(mapToMoviesDto)))
  }
}
