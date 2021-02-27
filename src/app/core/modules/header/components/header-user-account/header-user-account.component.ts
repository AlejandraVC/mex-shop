import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ms-header-user-account',
  templateUrl: './header-user-account.component.html',
  styleUrls: ['./header-user-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserAccountComponent implements OnInit {
  isDisplayed = false;

  isAuthenticated = true; //MOCK DATA
  username = 'A.Vargas'; //MOCK DATA
  isAdmin = false; //MOCK DATA

  constructor() {}

  ngOnInit(): void {}

  toggleFlyout() {
    this.isDisplayed = !this.isDisplayed;
  }

  closeFlyout(): void {
    this.isDisplayed = false;
  }

  //mock
  signOut() {
    this.isAuthenticated = false;
    /* window.location.reload(); */
  }
}
