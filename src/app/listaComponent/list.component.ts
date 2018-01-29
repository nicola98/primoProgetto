import { Component, Input } from '@angular/core';
import { personaggi } from '../personaggi';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',

})
export class listaComponent {

    @Input()
    items: personaggi[];

}
