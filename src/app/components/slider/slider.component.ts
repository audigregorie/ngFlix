import { Component, Input, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { imagesBaseUrl } from '../../constants/images-sizes'
import { Movie } from '../../types/movie'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])],
})
export class SliderComponent implements OnInit {
  @Input() public isHeader = false
  @Input() public slides: Movie[] = []

  public imagesBaseUrl = imagesBaseUrl
  public slideIndex = 0

  constructor() {}

  ngOnInit() {
    if (!this.isHeader) {
      this.changeSlide()
    }
  }

  // Timed Interval to show different movies in the slider
  public changeSlide() {
    setInterval(() => {
      this.slideIndex += 1
      if (this.slideIndex > 10) {
        this.slideIndex = 0
      }
    }, 5000)
  }
}
