import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { User } from './../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  // public usersCollection: AngularFirestoreCollection<User>;
  // public users$: Observable<User[]>;

  constructor(
    private readonly angularFirestore: AngularFirestore //   private readonly _angularFirestoreDocument: AngularFirestoreDocument
  ) {}

  public getUsers(): Observable<User[]> {
    return this.angularFirestore.collection<User>('users').valueChanges();
  }
}
