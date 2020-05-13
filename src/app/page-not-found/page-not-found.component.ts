import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TitleService } from 'app/services/title.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  get sizeClass(): string {
    if (this.observer.isMatched('(max-width: 375px)')) {
      return 'mat-display-1';
    } else if (this.observer.isMatched('(max-width: 425px)')) {
      return 'mat-display-2';
    } else if (this.observer.isMatched('(max-width: 768px)')) {
      return 'mat-display-3';
    }
    return 'mat-display-4';
  }

  constructor(
    private observer: BreakpointObserver,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('CV | Not found page');
  }
}
