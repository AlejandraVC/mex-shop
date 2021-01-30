import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { HeaderUserAccountComponent } from './header-user-account/header-user-account.component';
import { HeaderLanguageSelectionComponent } from './header-language-selection/header-language-selection.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderNavigationComponent,
    HeaderUserAccountComponent,
    HeaderLanguageSelectionComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
