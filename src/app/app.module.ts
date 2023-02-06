// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // used to make animations
    AppRoutingModule, // takes care of routing
    HttpClientModule, NgbModule, // needed to make http req
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
