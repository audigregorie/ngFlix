import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Genre, MoviesDto } from '../../types/movie'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { PaginatorState } from 'primeng/paginator'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute)
  private moviesService = inject(MoviesService)

  public genres$: Observable<Genre[]> | null = null
  public showsList$: Observable<MoviesDto> | null = null

  public genreId = ''

  constructor() {}

  // Get the movie genres. Get the id of the genre as an activated route param. Initialize the component with the first page.
  ngOnInit() {
    this.genres$ = this.moviesService.getMovieGenres()
    this.activeRoute.params.subscribe((params) => {
      this.genreId = params['genreId']
      this.getPagedShows(1)
    })
  }

  // Get the page of shows by its genre
  public getPagedShows(page: number) {
    this.showsList$ = this.moviesService.getMoviesByGenre(page, this.genreId)
  }

  // Get the shows by its genre in referrence to its page number
  public pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    this.getPagedShows(pageNumber)
  }
}
