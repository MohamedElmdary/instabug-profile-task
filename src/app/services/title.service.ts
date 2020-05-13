import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private currentTitle: string;
  private timeout: any;

  constructor(private title: Title) {}

  setTitle(title: string) {
    this.currentTitle = title;
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.title.setTitle(title);
  }

  setPreviousTitle() {
    console.log(this.currentTitle);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.title.setTitle(this.currentTitle);
    }, 2000);
  }

  blur() {
    this.title.setTitle('Come Back :(');
  }

  focus() {
    this.title.setTitle('Welcome Back :)');
  }
}
