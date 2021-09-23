import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './account-orders.component.html',
  styleUrls: ['./account-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOrdersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
