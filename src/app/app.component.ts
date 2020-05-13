import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, delay } from 'rxjs/operators';
import { ScrollPageService } from './services/scroll-page.service';
import { NavLink, links } from '@type/navbar';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  sideOpened = false;
  readonly links: NavLink[] = links;

  @HostListener('window:blur')
  public onWindowBlur() {
    this.titleService.blur();
  }

  @HostListener('window:focus')
  public onWindowFocus() {
    this.titleService.focus();
    this.titleService.setPreviousTitle();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollPageService: ScrollPageService,
    private titleService: TitleService
  ) {}

  ngAfterViewInit() {
    this.scrollPageService.main = this.main.nativeElement;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route.snapshot.fragment),
        delay(250)
      )
      .subscribe(el => {
        this.scrollPageService.scrollTo(el);
      });
  }

  navigate(link: NavLink) {
    this.sideOpened = false;
    if (this.router.url === `/#${link.fragment}`) {
      this.scrollPageService.scrollTo(link.fragment);
      return;
    }
    this.router.navigate([link.route], { fragment: link.fragment });
  }
}
