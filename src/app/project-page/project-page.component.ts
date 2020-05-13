import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'app/services/projects.service';
import { Project } from '@type/project';
import { Meta } from '@angular/platform-browser';
import { TitleService } from 'app/services/title.service';

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
    private router: Router,
    private meta: Meta,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.project = this.projectsService.getProjectById(
      this.route.snapshot.params.id
    );
    if (!this.project) {
      this.router.navigate(['/404']);
      return;
    }
    this.titleService.setTitle(`PROJECT | ${this.project.title}`);
    this.meta.addTags([
      { property: 'og:type', content: 'Project Page' },
      { property: 'og:title', content: this.project.title }
    ]);
  }
}
