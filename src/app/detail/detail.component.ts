import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { personaggi } from '../personaggi';
import { ComunicatorService } from '../comunicator.service';
import { listaComponent } from '../listaComponent/list.component';
import { ListService } from '../list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  personaggioCorrente: personaggi;
  constructor(private router: ActivatedRoute, private listService: ListService) { 
    this.router.params.subscribe(params=>{
      if(params['id'] != '' && params['id'] != null)
        this.personaggioCorrente = this.listService.getCharacterById(params['id']);
    });
    
  }

}
