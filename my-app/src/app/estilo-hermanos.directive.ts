import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]',
  standalone: true
})
export class EstiloHermanosDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.textTransform = 'capitalize';
    this.el.nativeElement.style.color = 'black'
  }

}
