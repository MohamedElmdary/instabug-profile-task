import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProjectsService } from 'app/services/projects.service';
import { Project } from '@type/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.project = this.projectsService.getProjectById(
      this.route.snapshot.params.id
    );
    if (!this.project) {
      this.router.navigate(['/404']);
    }
  }
}
