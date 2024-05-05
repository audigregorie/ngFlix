import { Component, inject } from '@angular/core'
import { map } from 'rxjs'
import { mapToMovies } from '../../types/tvshow'
import { MoviesService } from '../../services/movies.service'
import { TvshowsService } from '../../services/tvshows.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private moviesService = inject(MoviesService)
  private tvshowsService = inject(TvshowsService)

  public popularMovies$ = this.moviesService.getMoviesByType('popular', 12)
  public popularTvshows$ = this.tvshowsService.getTvshowsByType('popular', 12).pipe(map(mapToMovies))
  public topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12)
  public upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12)

  constructor() {}
}
