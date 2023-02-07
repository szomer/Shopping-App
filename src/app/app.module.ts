// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemComponent } from './components/item/item.component';
import { ItemBannerComponent } from './components/item-banner/item-banner.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClothingSelectionComponent } from './pages/clothing-selection/clothing-selection.component';
import { ClothingMenComponent } from './pages/clothing-men/clothing-men.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ElectronicsComponent,
    JeweleryComponent,
    ClothingComponent,
    SliderComponent,
    ItemComponent,
    ItemBannerComponent,
    ProductComponent,
    ProductsComponent,
    ClothingSelectionComponent,
    ClothingMenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // used to make animations
    AppRoutingModule, // takes care of routing
    HttpClientModule, // needed to make http req
    NgbModule, // bootstrap module
    AccordionModule.forRoot(), // boootstrap accordion component
    PaginationModule.forRoot(), // boootstrap paginator component
    NgxPaginationModule, // ngx boootstrap paginator component
    FormsModule, // forms
    BsDropdownModule, // ngx boootstrap dropdown menu component
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
