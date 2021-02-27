import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './core/components/cart/cart.component';
import { CheckoutComponent } from './core/components/checkout/checkout.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { OrderSuccessComponent } from './core/components/order-success/order-success.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './core/components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('./core/modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./core/modules/user/user.module').then((m) => m.UserModule),
  },

  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
