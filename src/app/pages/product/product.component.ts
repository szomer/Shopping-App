import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  product: Product | null = null;

  isFirstOpen = true;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getProduct(id);
    });
  }

  getProduct(id: number) {
    this.productsService.getProduct(id).subscribe((productData) => {
      this.product = productData;
    });
  }
}
