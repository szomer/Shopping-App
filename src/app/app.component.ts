import { Component, OnInit } from '@angular/core';
import { Category } from './models/Category';
import { Product } from './models/Product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  productsElec: Product[] = [];

  categories: Category[] | null = null;
  product: Product | null = null;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getProduct(2);
    this.getCategories();
    this.getProducts('?limit=2');

    this.getProductsCategory('elec', '?limit=3');
  }

  getProduct(id: number) {
    this.productsService.getProduct(id).subscribe((productData) => {
      this.product = productData;
    });
  }

  getCategories() {
    this.productsService.getAllCategories().subscribe((categoryArr) => {
      this.categories = categoryArr;
    });
  }

  getProducts(query?: string) {
    this.productsService.getAllProducts(query).subscribe((productsArr) => {
      this.products = productsArr;
    });
  }

  getProductsCategory(category: string, query?: string) {
    this.productsService
      .getProductsByCategory(category, query)
      .subscribe((productsArr) => {
        this.productsElec = productsArr;
      });
  }
}
