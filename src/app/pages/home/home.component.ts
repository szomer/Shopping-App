import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  // categories: Category[] | null = null;
  // product: Product | null = null;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getProducts('');
  }

  // getProduct(id: number) {
  //   this.productsService.getProduct(id).subscribe((productData) => {
  //     this.product = productData;
  //   });
  // }

  // getCategories() {
  //   this.productsService.getAllCategories().subscribe((categoryArr) => {
  //     this.categories = categoryArr;
  //   });
  // }

  getProducts(query?: string) {
    this.productsService.getAllProducts(query).subscribe((productsArr) => {
      this.products = productsArr;
    });
  }
}
