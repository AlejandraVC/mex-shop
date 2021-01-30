import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ms-footer-newsletter',
  templateUrl: './footer-newsletter.component.html',
  styleUrls: ['./footer-newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterNewsletterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
