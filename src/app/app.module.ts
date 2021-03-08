import { firebaseConfig } from './config/firebase.config';
import { AngularFireAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { LoginComponent } from './Pages/login/login.component';
import { BannerComponent } from './Components/banner/banner.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './Components/products/products.component';
import { CheckproductsComponent } from './Components/checkproducts/checkproducts.component';
import { CheckoutsubtotalComponent } from './Components/checkoutsubtotal/checkoutsubtotal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    ProductsComponent,
    CheckproductsComponent,
    CheckoutsubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
