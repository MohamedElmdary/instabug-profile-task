import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  private idx = 0;
  @Input() images: string[];

  get selectedImage() {
    return this.images[this.idx];
  }

  selectImage(idx: number) {
    this.idx = idx;
  }
}
