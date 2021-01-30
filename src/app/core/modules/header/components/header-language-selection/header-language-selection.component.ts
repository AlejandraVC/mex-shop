import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ms-header-language-selection',
  templateUrl: './header-language-selection.component.html',
  styleUrls: ['./header-language-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLanguageSelectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
