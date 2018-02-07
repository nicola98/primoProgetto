import { Component } from '@angular/core';
import { personaggi } from './personaggi';
import { ListService } from './list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  items: personaggi []=[];
  value: string;
  personaggioCorrente : personaggi;

  constructor()
  {
    this.title="fiiiii";
    let listService: ListService = new ListService();
    this.items = listService.getCharactersList();
  }

  showValue()
  {
    alert("valore: "+this.value);
    this.value="";
  }

  showItem(perso : personaggi){
    this.personaggioCorrente=perso;
  }

  
}
