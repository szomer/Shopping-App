import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.sass'],
})
export class ItemBannerComponent {
  @Input() items: Product[] = [];
}
