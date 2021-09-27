import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const userRoutes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    pathMatch: 'full',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    pathMatch: 'full',
    redirectTo: '/404',
  },
  {
    path: 'reset-password/:uuid',
    pathMatch: 'full',
    component: ResetPasswordComponent,
  },
];

export const UserRoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(userRoutes);
