import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appClosemenu]'
})
export class ClosemenuDirective {
  @Input() public menu: any;

  constructor(private element: ElementRef) { }

  @HostListener('click')
  private onClick() {
    this.menu.classList.add('hide');
  }

}
