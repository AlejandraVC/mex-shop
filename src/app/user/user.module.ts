import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, UserRoutingModule],
  providers: [UserService],

  // imports: [FormComponentsModule, UserAuthenticationModalModule],
})
export class UserModule {}
