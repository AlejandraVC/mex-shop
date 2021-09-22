import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [OrderComponent, OverviewComponent],
  imports: [CommonModule],
})
export class AccountModule {}
