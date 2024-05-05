import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { mapToMoviesDto } from '../../types/tvshow'
import { MoviesDto } from '../../types/movie'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { PaginatorState } from 'primeng/paginator'
import { TvshowsService } from '../../services/tvshows.service'

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute)
  private moviesService = inject(MoviesService)
  private tvshowsService = inject(TvshowsService)

  public showsList$: Observable<MoviesDto> | null = null

  public searchValue = ''
  public showsType: 'movie' | 'tv' = 'movie'

  constructor() {}

  // Get the type of show as an activated route param. Initialize the component by its type and its first page.
  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.showsType = params['type']
      this.getPagedShows(this.showsType, 1)
    })
  }

  // Get shows by their type, page, and search keyword.
  public getPagedShows(showsType: 'movie' | 'tv', page: number, searchKeyword?: string) {
    if (showsType === 'movie') {
      this.showsList$ = this.moviesService.searchMovies(page, searchKeyword)
    }

    if (showsType === 'tv') {
      this.showsList$ = this.tvshowsService.searchTvshows(page, searchKeyword).pipe(map(mapToMoviesDto))
    }
  }

  // Everytime the input changes, get the new search keyword and page number.
  public searchChanged() {
    this.getPagedShows(this.showsType, 1, this.searchValue)
  }

  // Get the shows in referrence to its page number
  public pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    if (event.page) {
      this.getPagedShows(this.showsType, pageNumber, this.searchValue)
    }
  }
}
