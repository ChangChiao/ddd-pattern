import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-pattern-payment-pay-page-features-pay-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>payment-pay-page-features-pay-page works!</p>`,
  styleUrls: ['./payment-pay-page-features-pay-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentPayPageFeaturesPayPageComponent {}
