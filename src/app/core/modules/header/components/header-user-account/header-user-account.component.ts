import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ms-header-user-account',
  templateUrl: './header-user-account.component.html',
  styleUrls: ['./header-user-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserAccountComponent implements OnInit {
  public isAuthenticated$: Observable<firebase.default.User | null>;
  public userName$: Observable<string>;

  public isDisplayed = false; // Dropdown user menu status.

  isAdmin = false; //MOCK DATA

  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.angularFireAuth.authState;

    // Set abbreviated username to pass to account button
    this.userName$ = this.angularFireAuth.authState.pipe(
      map((session) => {
        const userName = session?.displayName?.toString().split(' ');
        const initialLetterFirstName = session?.displayName?.[0] ?? '';
        const lastName = userName?.[1];

        return `${initialLetterFirstName}. ${lastName}`;
      })
    );
  }

  /**
   * Hide user's dropdown flyout when cursor leaves flyout
   * Only for large view viewports > 1280px
   */
  public closeFlyout(): boolean {
    return (this.isDisplayed = false);
  }

  /**
   * Switch the display state of the user's dropdown flyout (hide/show)
   * Only for large view viewports > 1280px
   */
  public toggleFlyout(): boolean {
    return (this.isDisplayed = !this.isDisplayed);
  }

  /**
   * User sign out
   */
  public onSignOut(): void {
    this.angularFireAuth
      .signOut()
      .then(() => {
        // Sign-out successful.
        alert('Sign-out successful');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        // An error happened.
        alert('ERROR WHILE SIGNING OUT: ' + error);
      });

    /* window.location.reload(); */
  }
}
