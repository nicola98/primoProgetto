import { Component, OnInit } from '@angular/core';
import { personaggi } from '../personaggi';
import { ComunicatorService } from '../comunicator.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  personaggioCorrente: personaggi;
  constructor(private comunucatorService: ComunicatorService) { 
    this.comunucatorService.mySubject$.subscribe((newValue: personaggi) =>{
        this.personaggioCorrente=newValue;
    });
  }

}
