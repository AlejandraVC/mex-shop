import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ms-header-user-account',
  templateUrl: './header-user-account.component.html',
  styleUrls: ['./header-user-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserAccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
