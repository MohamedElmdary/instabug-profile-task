import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ProjectsService } from 'app/services/projects.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects = this.projectsService.projects;

  get isTable() {
    return this.observer.isMatched('(max-width: 768px)');
  }

  isGrid(val: 'grid' | 'rows') {
    return this.isTable || val === 'grid';
  }

  constructor(
    private observer: BreakpointObserver,
    private projectsService: ProjectsService
  ) {}
}
