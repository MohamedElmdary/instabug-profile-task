import { Component } from '@angular/core';
import { SocialLink } from '@type/social';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links: SocialLink[] = [
    new SocialLink('github', 'https://github.com/MohamedElmdary'),
    new SocialLink('envato', 'https://themeforest.net/user/mohamedelmdary'),
    new SocialLink(
      'linkedin',
      'https://www.linkedin.com/in/mohamed-elmdary-949968181'
    ),
    new SocialLink('codepen', 'https://codepen.io/mohamed9714'),
    new SocialLink('facebook', 'https://www.facebook.com/mohamed.rabie.5439087')
  ];
}
