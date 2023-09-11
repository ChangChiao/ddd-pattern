import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-pattern-platform-auth-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>platform-auth-page works!</p>`,
  styleUrls: ['./platform-auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformAuthPageComponent {}
