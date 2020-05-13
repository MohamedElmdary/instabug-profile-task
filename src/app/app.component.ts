import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, delay } from 'rxjs/operators';
import { ScrollPageService } from './services/scroll-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollPageService: ScrollPageService
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
}
