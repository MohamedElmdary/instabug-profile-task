import {
  Component,
  Input,
  Renderer2,
  PLATFORM_ID,
  Inject,
  OnInit
} from '@angular/core';
import { NavLink, links } from '@type/navbar';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollPageService } from 'app/services/scroll-page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  isDark = false;

  get isMobile() {
    return this.observer.isMatched('(max-width: 599px)');
  }

  readonly links: NavLink[] = links;

  constructor(
    private observer: BreakpointObserver,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private router: Router,
    private scrollPageService: ScrollPageService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const theme = window.localStorage.getItem('theme');
      if (theme) {
        if (theme === 'dark') {
          this.toggleTheme();
        }
      } else {
        window.localStorage.setItem('theme', 'light');
      }
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      const link: HTMLElement = document.getElementById('link-theme');
      this.renderer.setAttribute(
        link,
        'href',
        `./assets/css/${this.isDark ? 'purple-green.css' : 'indigo-pink.css'}`
      );
    }
  }

  navigate(link: NavLink) {
    if (this.router.url === `/#${link.fragment}`) {
      this.scrollPageService.scrollTo(link.fragment);
      return;
    }
    this.router.navigate([link.route], { fragment: link.fragment });
  }
}
