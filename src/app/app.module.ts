import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { FooterModule } from './core/modules/footer/footer.module';
import { HeaderModule } from './core/modules/header/header.module';
import { UserModule } from './user/user.module';

import { CartComponent } from './core/components/cart/cart.component';
import { CheckoutComponent } from './core/components/checkout/checkout.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './user/components/login/login.component';
import { OrderSuccessComponent } from './core/components/order-success/order-success.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './core/components/products/products.component';

import { FirestoreService } from './core/services/firestore.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    OrderSuccessComponent,
    PageNotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    AppRoutingModule,
    BrowserModule,

    AdminModule,
    FooterModule,
    HeaderModule,
    UserModule,
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
