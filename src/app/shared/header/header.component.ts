import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  routeName: string[] = ['electronics', 'jewelery', 'men', 'women'];
  products: Product[] = [];
  productsSearched: Product[] = [];

  constructor(
    private productsService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts('');
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

  onClickSubmit(data: any) {
    this.productsSearched = [];
    this.searchProduct(data.searchValue);
  }

  searchProduct(searchValue: string) {
    this.products.forEach((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        this.productsSearched.push(item);
      }
    });

    if (searchValue.length > 0 && this.productsSearched.length > 0) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate([
          '/products',
          {
            items: JSON.stringify(this.productsSearched),
          },
        ])
      );
    } else {
      this.router.navigate(['/']);
    }
  }
}
