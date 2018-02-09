import { Component, Input, EventEmitter, Output } from '@angular/core';
import { personaggi } from '../personaggi';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',

})
export class listaComponent {

  @Input()
  items: personaggi[];

  @Output()
  itemSelectedChange = new EventEmitter<personaggi>()

  mostra = new EventEmitter<personaggi>(); 

  ngOnInit() {
    this.items.push(new personaggi);
  }

  ngOnDestroy() {
   
  }

  si(item: personaggi)
  {
    this.itemSelectedChange.emit(item); 
  }
}
