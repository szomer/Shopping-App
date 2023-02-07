import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent {
  @Input() products: Product[] = [];

  constructor(private route: ActivatedRoute) {
    let str: string = this.route.snapshot.paramMap.get('items')!;
    let obj: any = JSON.parse(str);
    for (let index = 0; index < obj.length; index++) {
      this.products.push(obj[index]);
    }
  }
}
