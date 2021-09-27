import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';
import { AccountOrderComponent } from './components/account-order/account-order.component';
import { AccountOverviewComponent } from './components/account-overview/account-overview.component';
import { AccountRoutingModule } from './account.routing';

@NgModule({
  declarations: [
    AccountComponent,
    AccountOrderComponent,
    AccountOverviewComponent,
  ],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
