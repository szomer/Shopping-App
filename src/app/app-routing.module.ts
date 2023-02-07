import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingMenComponent } from './pages/clothing-men/clothing-men.component';
import { ClothingSelectionComponent } from './pages/clothing-selection/clothing-selection.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { HomeComponent } from './pages/home/home.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'electronics',
    component: ElectronicsComponent,
  },
  {
    path: 'jewelery',
    component: JeweleryComponent,
  },
  {
    path: 'clothing',
    component: ClothingSelectionComponent,
  },
  {
    path: 'clothing/men',
    component: ClothingMenComponent,
  },
  {
    path: 'clothing/women',
    component: ClothingComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
