import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollPageService {
  private $w: HTMLElement;

  set main(el: HTMLElement) {
    this.$w = el;
  }

  constructor(
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  scrollTo(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.$w.scrollTo({
        top: (document.getElementById(id) || { offsetTop: 0 }).offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
