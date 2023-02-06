import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() products: Product[] = [];

  currentSlideIndex: number = 0; // Slide index

  ngOnInit(): void {
    // Check if its a banner or slide show

    // Every 6 seconds change the displayed slide
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.products.length;
    }, 6000);
  }
}
