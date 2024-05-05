import { Component, Input } from '@angular/core'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() public shows: Movie[] = []
  @Input() public showsTypes: 'movie' | 'tv' = 'movie'
  @Input() public title = ''
}
