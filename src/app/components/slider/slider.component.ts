import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
} from '@angular/animations';

import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
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
