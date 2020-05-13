import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, delay } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // because this component will never be destroied
      // there is no need to remove "subscribe"
      /**
       * @bug
       * scrolling would cause problem if u went to same fragment
       */
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => this.route.snapshot.fragment),
          // filter(fragment => !!fragment),
          map(id => document.getElementById(id)),
          // filter(el => !!el),
          delay(250)
        )
        .subscribe(el => {
          this.main.nativeElement.scrollTo({
            top: (el || { offsetTop: 0 }).offsetTop,
            behavior: 'smooth'
          });
        });
    }
  }
}
