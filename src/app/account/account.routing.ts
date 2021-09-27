import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountOrderComponent } from './components/account-order/account-order.component';
import { AccountOrdersComponent } from './components/account-orders/account-orders.component';
import { AccountOverviewComponent } from './components/account-overview/account-overview.component';

// import { AuthGuard } from './guards/auth.guard';

export const accountRoutes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: AccountComponent,
    children: [
      {
        path: 'overview',
        component: AccountOverviewComponent,
      },
      {
        path: 'orders',
        component: AccountOrdersComponent,
      },
      {
        path: 'orders/order/:id',
        component: AccountOrderComponent,
      },
    ],
  },
];

export const AccountRoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(accountRoutes);
