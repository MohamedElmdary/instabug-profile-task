import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  keyframes,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [
    trigger('sumitAnimation', [
      transition(':enter', [
        style({
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, 50%)',
          height: '30px',
          width: '30px',
          borderRadius: '50%',
          willChange: 'transform, top, height, width'
        }),
        query(
          '@sumitAnimation > div > *',
          style({
            transform: 'translateY(-15px)',
            opacity: 0,
            willChange: 'opacity, transform'
          }),
          { optional: true }
        ),
        animate(
          800,
          keyframes([
            style({
              offset: 1 / 6,
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }),
            style({
              offset: 2 / 6,
              borderRadius: 0
            }),
            style({
              offset: 4 / 6,
              height: '100%'
            }),
            style({
              offset: 1,
              width: '100%'
            })
          ])
        ),
        query(
          '@sumitAnimation > div > h6',
          [
            animate(
              150,
              style({
                opacity: 1,
                transform: 'translateX(0)'
              })
            )
          ],
          { optional: true }
        ),
        query(
          '@sumitAnimation > div > p',
          [
            animate(
              150,
              style({
                opacity: 1,
                transform: 'translateX(0)'
              })
            )
          ],
          { optional: true }
        ),
        query(
          '@sumitAnimation > div > mat-icon',
          [
            animate(
              150,
              style({
                opacity: 1,
                transform: 'translateX(0)'
              })
            )
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ContactsComponent {}
