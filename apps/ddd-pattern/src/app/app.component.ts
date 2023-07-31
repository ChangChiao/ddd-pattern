import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomBtnComponent } from './customBtn/custom-btn.component';

@Component({
  standalone: true,
  imports: [RouterModule, CustomBtnComponent],
  selector: 'ddd-pattern-root',
  template: `
    <main>
      <router-outlet></router-outlet>
      <ddd-pattern-custom-btn size="lg" />
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ddd-pattern';
}
