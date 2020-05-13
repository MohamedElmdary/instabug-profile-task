import { Injectable } from '@angular/core';
import { Project } from '@type/project';

// this services could be replaced with some state management
// however for such small project it's more than enough
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // tslint:disable-next-line: variable-name
  private readonly _projects: Project[] = [
    {
      id: '0',
      thumbnail: 'http://placehold.it/250x250',
      title: 'Mern Blog 1',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corporis ut commodi provident omnis, similique ratione expedita excepturi deserunt impedit nesciunt nisi! Molestiae quam aliquid at possimus nam deleniti consequatur ratione sit. Distinctio perspiciatis adipisci nisi minus illo sed vitae.`,
      techs: ['ReactJS', 'ExpressJS', 'Mongo DB', 'Mongoose'],
      code: 'https://gitlab.com/engm5081/Mern-Stack-Blog',
      preview: 'https://react-socialapp.herokuapp.com/',
      images: [
        'http://placehold.it/250x250/2ecc71/000000',
        'http://placehold.it/250x250/d35400/000000',
        'http://placehold.it/250x250/8e44ad/000000',
        'http://placehold.it/250x250/c0392b/000000'
      ]
    },
    {
      id: '1',
      thumbnail: 'http://placehold.it/250x250',
      title: 'Mern Blog 2',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corporis ut commodi provident omnis, similique ratione expedita excepturi deserunt impedit nesciunt nisi! Molestiae quam aliquid at possimus nam deleniti consequatur ratione sit. Distinctio perspiciatis adipisci nisi minus illo sed vitae.`,
      techs: ['ReactJS', 'ExpressJS', 'Mongo DB', 'Mongoose'],
      code: 'https://gitlab.com/engm5081/Mern-Stack-Blog',
      preview: 'https://react-socialapp.herokuapp.com/',
      images: [
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250'
      ]
    },
    {
      id: '2',
      thumbnail: 'http://placehold.it/250x250',
      title: 'Mern Blog 3',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corporis ut commodi provident omnis, similique ratione expedita excepturi deserunt impedit nesciunt nisi! Molestiae quam aliquid at possimus nam deleniti consequatur ratione sit. Distinctio perspiciatis adipisci nisi minus illo sed vitae.`,
      techs: ['ReactJS', 'ExpressJS', 'Mongo DB', 'Mongoose'],
      code: 'https://gitlab.com/engm5081/Mern-Stack-Blog',
      preview: 'https://react-socialapp.herokuapp.com/',
      images: [
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250'
      ]
    },
    {
      id: '3',
      thumbnail: 'http://placehold.it/250x250',
      title: 'Mern Blog 4',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corporis ut commodi provident omnis, similique ratione expedita excepturi deserunt impedit nesciunt nisi! Molestiae quam aliquid at possimus nam deleniti consequatur ratione sit. Distinctio perspiciatis adipisci nisi minus illo sed vitae.`,
      techs: ['ReactJS', 'ExpressJS', 'Mongo DB', 'Mongoose'],
      code: 'https://gitlab.com/engm5081/Mern-Stack-Blog',
      preview: 'https://react-socialapp.herokuapp.com/',
      images: [
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250'
      ]
    },
    {
      id: '4',
      thumbnail: 'http://placehold.it/250x250',
      title: 'Mern Blog 5',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corporis ut commodi provident omnis, similique ratione expedita excepturi deserunt impedit nesciunt nisi! Molestiae quam aliquid at possimus nam deleniti consequatur ratione sit. Distinctio perspiciatis adipisci nisi minus illo sed vitae.`,
      techs: ['ReactJS', 'ExpressJS', 'Mongo DB', 'Mongoose'],
      code: 'https://gitlab.com/engm5081/Mern-Stack-Blog',
      preview: 'https://react-socialapp.herokuapp.com/',
      images: [
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250',
        'http://placehold.it/250x250'
      ]
    }
  ];

  get projects() {
    return this._projects.slice();
  }

  getProjectById(id: string): Project | null {
    const projectIdx = this._projects.findIndex(project => project.id === id);
    if (projectIdx === -1) {
      return null;
    }
    // return copy
    return { ...this.projects[projectIdx] };
  }
}
