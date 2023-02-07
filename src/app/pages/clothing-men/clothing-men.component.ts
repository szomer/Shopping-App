import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-clothing-men',
  templateUrl: './clothing-men.component.html',
  styleUrls: ['./clothing-men.component.sass'],
})
export class ClothingMenComponent {
  products: Product[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService
      .getProductsByCategory('men', '')
      .subscribe((productsMenArr) => {
        this.products = productsMenArr;
        console.log(productsMenArr);
      });
  }
}
