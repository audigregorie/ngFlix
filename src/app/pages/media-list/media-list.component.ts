import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { mapToMoviesDto } from '../../types/tvshow'
import { MoviesDto } from '../../types/movie'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { PaginatorState } from 'primeng/paginator'
import { TvshowsService } from '../../services/tvshows.service'

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.scss',
})
export class MediaListComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute)
  private moviesService = inject(MoviesService)
  private tvshowsService = inject(TvshowsService)

  public media$: Observable<MoviesDto> | null = null

  public searchValue = ''
  public mediaType: 'movie' | 'tv' = 'movie'

  constructor() {}

  // Get the type of show as an activated route param. Initialize the component by its type and its first page.
  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.mediaType = params['type']
      this.getPagedShows(this.mediaType, 1)
    })
  }

  // Search data received from Emitter
  public searchEmitted(searchValue: string) {
    this.searchValue = searchValue
    this.getPagedShows(this.mediaType, 1, this.searchValue)
  }

  // Get shows by their type, page, and search keyword.
  public getPagedShows(mediaType: 'movie' | 'tv', page: number, searchKeyword?: string) {
    mediaType === 'movie' ? (this.media$ = this.moviesService.searchMovies(page, searchKeyword)) : (this.media$ = this.tvshowsService.searchTvshows(page, searchKeyword).pipe(map(mapToMoviesDto)))
  }

  // Everytime the input changes, get the new search keyword and page number.
  public searchChanged() {
    this.getPagedShows(this.mediaType, 1, this.searchValue)
  }

  // Get the shows in referrence to its page number
  public pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    if (event.page) {
      this.getPagedShows(this.mediaType, pageNumber, this.searchValue)
    }
  }
}
