import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { HomeComponent } from './pages/home/home.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';
import { ProductComponent } from './pages/product/product.component';

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
    component: ClothingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
