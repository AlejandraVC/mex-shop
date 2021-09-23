import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { FooterModule } from './core/modules/footer/footer.module';
import { HeaderModule } from './core/modules/header/header.module';
import { UserModule } from './user/user.module';

import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

import { FirestoreService } from './core/services/firestore.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    AppRoutingModule,
    BrowserModule,

    AccountModule,
    AdminModule,
    FooterModule,
    HeaderModule,
    UserModule,
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
