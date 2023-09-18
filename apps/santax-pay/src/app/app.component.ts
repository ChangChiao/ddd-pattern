import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'ddd-pattern-root',
  template: `<ddd-pattern-nx-welcome></ddd-pattern-nx-welcome> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'santax-pay';
}
