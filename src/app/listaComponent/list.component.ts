import { Component, Input, EventEmitter, Output } from '@angular/core';
import { personaggi } from '../personaggi';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',

})
export class listaComponent {

  items: personaggi[];

  constructor(private comunicatorService: ComunicatorService, private listService: ListService){

  }

  ngOnInit() {
    this.items = this.listService.getCharactersList();
  }

  ngOnDestroy() {
   
  }

  si(item: personaggi)
  {
   //chiamo il next nel subject
   this.comunicatorService.changeSubject(item);
  }
}
