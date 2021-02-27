import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

const routes: Routes = [
  { path: 'account', component: UserAccountComponent },
  { path: 'orders', component: UserOrdersComponent },
];

export const user = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
