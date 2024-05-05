import { Component, Input } from '@angular/core'
import { imagesBaseUrl } from '../../constants/images-sizes'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() public showItem: Movie | null = null
  @Input() public showType: 'movie' | 'tv' = 'movie'

  public imagesBaseUrl = imagesBaseUrl
}
