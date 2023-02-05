import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.sass'],
})
export class ClothingComponent implements OnInit {
  productsMen: Product[] = [];
  productsWomen: Product[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService
      .getProductsByCategory('men', '')
      .subscribe((productsMenArr) => {
        this.productsMen = productsMenArr;
      });

    this.productsService
      .getProductsByCategory('women', '')
      .subscribe((productsWomenArr) => {
        this.productsWomen = productsWomenArr;
        console.log(productsWomenArr);
      });
  }
}
