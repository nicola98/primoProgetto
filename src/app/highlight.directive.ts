import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { 
   this.setBackGround('blue');
  }

setBackGround(color: string)
{
  this.elem.nativeElement.style.background = color;
}

}
