import { Component, Input } from '@angular/core'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() public media: Movie[] = []
  @Input() public mediaType: 'movie' | 'tv' = 'movie'
  @Input() public title = ''
}
