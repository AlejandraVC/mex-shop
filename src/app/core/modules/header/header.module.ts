import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { HeaderUserAccountComponent } from './components/header-user-account/header-user-account.component';
import { HeaderLanguageSelectionComponent } from './components/header-language-selection/header-language-selection.component';

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
