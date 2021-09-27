import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ms-header-language-selection',
  templateUrl: './header-language-selection.component.html',
  styleUrls: ['./header-language-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLanguageSelectionComponent implements OnInit {
  public siteLanguage = 'en';

  public languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  constructor() {}
  ngOnInit(): void {
    this.getSiteLanguage();
  }

  /**
   *
   * @returns Site Language string
   */
  public getSiteLanguage(): string {
    const locale = window.location.pathname.split('/')[1];

    switch (locale) {
      case 'es':
        return (this.siteLanguage = 'es');
      default:
        return (this.siteLanguage = 'en');
    }
  }
}
