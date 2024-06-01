import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() public searchEmitter = new EventEmitter<string>()

  public searchControl: FormControl = new FormControl('')

  public onSearch() {
    const searchTerm = this.searchControl.value
    this.searchEmitter.emit(searchTerm)
    console.log(searchTerm)
  }
}
