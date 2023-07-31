import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';

type BtnSize = 'sm' | 'md' | 'lg';

@Directive({
  selector: '[dddPatternBtn]',
  standalone: true,
})
export class CustomBtnDirective implements OnInit {
  _elRef = inject(ElementRef);
  renderer = inject(Renderer2);

  @Input()
  set size(size: BtnSize) {
    this.handleSize(size);
  }

  ngOnInit() {
    this.renderer.setStyle(
      this._elRef.nativeElement,
      'background-color',
      'pink'
    );
  }

  private handleSize(size: string) {
    // 根据指定的大小设置元素的样式
    switch (size) {
      case 'sm':
        this.renderer.setStyle(this._elRef.nativeElement, 'font-size', '12px');
        break;
      case 'md':
        this.renderer.setStyle(this._elRef.nativeElement, 'font-size', '28px');
        break;
      case 'lg':
        this.renderer.setStyle(this._elRef.nativeElement, 'font-size', '40px');
        break;
      default:
        this.renderer.setStyle(
          this._elRef.nativeElement,
          'font-size',
          'inherit'
        );
        break;
    }
  }
}
