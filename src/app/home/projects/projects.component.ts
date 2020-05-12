import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  get isTable() {
    return this.observer.isMatched('(max-width: 768px)');
  }

  isGrid(val: 'grid' | 'rows') {
    return this.isTable || val === 'grid';
  }

  constructor(private observer: BreakpointObserver) {}
}
