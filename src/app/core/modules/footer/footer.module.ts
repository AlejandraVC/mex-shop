import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FooterHelpComponent } from './components/footer-help/footer-help.component';
import { FooterNewsletterComponent } from './components/footer-newsletter/footer-newsletter.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterHelpComponent,
    FooterNewsletterComponent,
  ],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
