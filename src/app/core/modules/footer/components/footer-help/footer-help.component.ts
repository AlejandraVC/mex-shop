import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ms-footer-help',
  templateUrl: './footer-help.component.html',
  styleUrls: ['./footer-help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterHelpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
