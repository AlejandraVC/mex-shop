import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public loginWithGoogle(): void {
    const provider = new firebase.default.auth.GoogleAuthProvider();

    this.angularFireAuth
      .signInWithPopup(provider)
      .then(() => {
        // Sign-in successful.
        alert('Sign-in successful');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        // An error happened.
        alert('ERROR WHILE SIGNING IN: ' + error);
      });

    // const provider = new firebase.auth.GoogleAuthProvider();

    // const provider = new GoogleAuthProvider();
  }
}
