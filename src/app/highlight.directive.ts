import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor:string;
  private ultimateDefaultColor:string='red';
  constructor(private elem:ElementRef) { 
   
  }

  setBackGround(color: string = null)
  {
    this.elem.nativeElement.style.background = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround(this.highlightColor || this.defaultColor || this.ultimateDefaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackGround();
  }


}
