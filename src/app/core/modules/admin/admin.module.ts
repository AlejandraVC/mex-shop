import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';

@NgModule({
  declarations: [AdminOrdersComponent, AdminProductsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
