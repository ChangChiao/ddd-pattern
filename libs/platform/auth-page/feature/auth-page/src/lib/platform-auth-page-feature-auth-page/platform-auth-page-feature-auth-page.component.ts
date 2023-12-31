import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-pattern-platform-auth-page-feature-auth-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>platform-auth-page-feature-auth-page works!</p>`,
  styleUrls: ['./platform-auth-page-feature-auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformAuthPageFeatureAuthPageComponent {}
