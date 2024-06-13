import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCapitalizeFirst]',
  standalone: true
})
export class CapitalizeFirstDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let capitalizedValue = inputElement.value.toLowerCase();
    capitalizedValue = capitalizedValue.charAt(0).toUpperCase() + capitalizedValue.slice(1);
    this.renderer.setProperty(inputElement, 'value', capitalizedValue);
  }
}
