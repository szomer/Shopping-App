import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.sass'],
})
export class ElectronicsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getProductsCategory('elec', '');
  }

  getProductsCategory(category: string, query?: string) {
    this.productsService
      .getProductsByCategory(category, query)
      .subscribe((productsArr) => {
        this.products = productsArr;
      });
  }
}
