import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-pattern-payment-pay-page-domain',
  standalone: true,
  imports: [CommonModule],
  template: `<p>payment-pay-page-domain works!</p>`,
  styleUrls: ['./payment-pay-page-domain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentPayPageDomainComponent {}
