import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './account-order.component.html',
  styleUrls: ['./account-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
