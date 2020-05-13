import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@type/project';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-project]',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: Project;
  @Input() isRow: boolean;
}
