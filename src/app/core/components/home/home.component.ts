import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../interfaces/user';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(private readonly firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.users$ = this.firestoreService.getUsers();
  }
}
