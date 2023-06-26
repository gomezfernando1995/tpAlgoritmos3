import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCambiarCursor]'
})
export class CambiarCursorDirective {


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiarCursor('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiarCursor('default');
  }

  private cambiarCursor(cursorType: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', cursorType);
  }
}
