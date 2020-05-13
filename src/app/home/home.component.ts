import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TitleService } from 'app/services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta, private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('CV | Home page');
    // should add more open graph
    // for better social engine friendly
    this.meta.addTags([
      { property: 'og:type', content: 'Portfolio' },
      { property: 'og:title', content: 'Elmdary-CV' },
      {
        property: 'og:description',
        content: `Elmdary CV is a portfolio create by mohamed elmdary who is a full stack web developer with experience over 3 fully skilled with mern stack developer, mean stack developer, graphql, prisma, front end, back end, angular, react, vue, typescript, es6, javascript, materialize, bootstrap, jquery, nodejs, expressjs, nestjs, react native.`
      },
      {
        property: 'og:image',
        content:
          'https://serving.photos.photobox.com/294686800d8218c00380e1fe0e626d775b872cff7a48147fa3b1555523742e9a7c7f7bd9.jpg'
      },
      { property: 'og:image:type', content: 'image/jpg' },
      { property: 'og:image:width', content: '300' },
      { property: 'og:image:height', content: '300' },
      { property: 'og:url', content: 'my awesome url' },
      { property: 'twitter:title', content: 'Elmdary-CV' }
    ]);
  }
}
