import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CartService } from './core/services/cart.service';
import { SessionService } from './core/services/session.service';
import { UniversalService } from './core/services/universal.service';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'MexShop';

  constructor(
    private readonly cartService: CartService,
    private readonly sessionService: SessionService,
    private readonly universalService: UniversalService
  ) {}

  public ngOnInit(): void {
    if (!this.universalService.isBrowser()) {
      return;
    }

    /**
     * Because the session is stored in a server side cookie the user status needs to be retreived
     * from the API once when the application starts. The result will be stored in the SessionService
     * so we are not interested in the result at this point. hence the .toPromise() is to avoid
     * a subscription here.
     */
    // this.sessionService.loadUserStatusFromApi().toPromise();

    /**
     * Cart should be loaded when the application starts.
     */
    // this.cartService.loadCart().toPromise();
  }
}
