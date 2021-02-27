import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

@NgModule({
  declarations: [UserOrdersComponent, UserAccountComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
