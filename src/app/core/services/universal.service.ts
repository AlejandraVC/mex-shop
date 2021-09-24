import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniversalService {
  private isBrowserPlataform = false; // Default 'false' for security reasons

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isBrowserPlataform = isPlatformBrowser(platformId);
  }

  /**
   * Returns whether a platform id represents a browser platform.
   */
  public isBrowser(): boolean {
    return this.isBrowserPlataform;
  }

  /**
   * Returns whether a platform id represents a server platform.
   */
  public isServer(): boolean {
    return !this.isBrowserPlataform;
  }
}
