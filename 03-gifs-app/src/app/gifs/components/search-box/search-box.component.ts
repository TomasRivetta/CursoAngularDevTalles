import { CommonModule } from '@angular/common';
import { GifsService } from '../../services/gifs.service';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  //Hago referencia al tag del input colocado arriba
  @ViewChild('txtTagInput')
  //NOT NULL OPERATOR
  public tagInput!: ElementRef<HTMLInputElement>;

  //ACA LLAMO AL SERVICE EN EL CONSTRUCTOR
  constructor(private gifsService: GifsService) {}

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
