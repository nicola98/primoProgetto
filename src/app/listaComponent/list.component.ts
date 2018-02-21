import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router} from '@angular/router';
import { personaggi } from '../personaggi';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',

})
export class listaComponent {

  items: personaggi[];

  constructor(private router: Router, private listService: ListService){

  }

  ngOnInit() {
    this.items = this.listService.getCharactersList();
  }

  ngOnDestroy() {
   
  }

  si(item: personaggi)
  {
      this.router.navigate(['/detail/'+item.id]);
  }
}
