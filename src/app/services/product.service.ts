import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../constants/API-URL';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrls = API_URLS;

  constructor(private http: HttpClient) {}

  // GET Product
  getProduct(productID: number) {
    return this.http.get<Product>(`${this.apiUrls.products}/${productID}`);
  }

  // GET Products
  getAllProducts(query?: string) {
    return this.http.get<Product[]>(`${this.apiUrls.products}${query}`);
  }

  // GET Categories
  getAllCategories() {
    return this.http.get<Category[]>(`${this.apiUrls.categories}`);
  }

  // GET Products of Category
  getProductsByCategory(category: string, query?: string) {
    category = this.getCategoryName(category);
    return this.http.get<Product[]>(
      `${this.apiUrls.category}/${category}${query}`
    );
  }

  getCategoryName(category: string) {
    switch (category) {
      case 'elec':
        category = 'electronics';
        break;
      case 'jew':
        category = 'jewelery';
        break;
      case 'men':
        category = "men's%20clothing";
        break;
      case 'women':
        category = "womens's%20clothing";
        break;
    }
    return category;
  }
}
