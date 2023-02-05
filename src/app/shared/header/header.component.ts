import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  routeName: string[] = ['electronics', 'jewelery', 'men', 'women'];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productsService.getAllCategories().subscribe((categoryArr) => {
      this.categories = categoryArr;
    });
  }
}
