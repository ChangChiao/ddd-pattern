import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBtnDirective } from './custom-btn.directive';

@Component({
  selector: 'ddd-pattern-custom-btn',
  standalone: true,
  imports: [CommonModule, CustomBtnDirective],
  template: `<button>test</button>`,
  styleUrls: ['./custom-btn.component.scss'],
  hostDirectives: [
    {
      directive: CustomBtnDirective,
      inputs: ['size'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBtnComponent {}
