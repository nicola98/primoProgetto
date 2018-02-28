import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { 
   
  }

  setBackGround(color: string)
  {
    this.elem.nativeElement.style.background = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackGround(null);
  }


}
