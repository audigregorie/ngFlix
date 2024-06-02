import { Component, Input } from '@angular/core'
import { imagesBaseUrl } from '../../constants/images-sizes'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrl: './media-item.component.scss',
})
export class MediaItemComponent {
  @Input() public mediaItem: Movie | null = null
  @Input() public mediaType: 'movie' | 'tv' = 'movie'

  public imagesBaseUrl = imagesBaseUrl
}
