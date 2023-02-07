import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.sass'],
})
export class ClothingComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService
      .getProductsByCategory('women', '')
      .subscribe((productsWomenArr) => {
        this.products = productsWomenArr;
        console.log(productsWomenArr);
      });
  }
}
