import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly ytdLink = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/EIxHoUeK_Mo'
  );

  readonly skills: string[] = [
    'HTML',
    'CSS',
    'SCSS',
    'JS',
    'Angular',
    'React',
    'Vue',
    'Nodejs',
    'Graphql',
    'Primsa',
    'My Sql',
    'ExpressJS',
    'Material',
    'Postgress',
    'Mongo DB',
    'Angular Universal',
    'Puppeteer',
    'NestJS',
    'RXJS',
    'NGXS',
    'Redux'
  ];

  constructor(private sanitizer: DomSanitizer) {}
}
