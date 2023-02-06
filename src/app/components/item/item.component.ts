import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent {
  @Input() item: Product | null = null;
}
