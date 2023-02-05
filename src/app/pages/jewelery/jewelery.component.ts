import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.sass'],
})
export class JeweleryComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getProductsCategory('jewelery', '');
  }

  getProductsCategory(category: string, query?: string) {
    this.productsService
      .getProductsByCategory(category, query)
      .subscribe((productsArr) => {
        this.products = productsArr;
      });
  }
}
