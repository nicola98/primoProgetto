import { Component, Input, EventEmitter, Output } from '@angular/core';
import { personaggi } from '../personaggi';
import { ComunicatorService } from '../comunicator.service';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',

})
export class listaComponent {

  @Input()
  items: personaggi[];

  constructor(private comunicatorService: ComunicatorService){

  }

  ngOnInit() {
    this.items.push(new personaggi());
  }

  ngOnDestroy() {
   
  }

  si(item: personaggi)
  {
   //chiamo il next nel subject
   this.comunicatorService.changeSubject(item);
  }
}
