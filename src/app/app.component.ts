import { Component } from '@angular/core';
import { personaggi } from './personaggi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  items: personaggi[] = [];
  value: string;

  constructor()
  {
    this.title="fiiiii";
    this.items.push(new personaggi());
    this.items.push(new personaggi("manga"));
    this.items.push(new personaggi("one piece", "rufy"));
    this.items.push(new personaggi("toriko", "death note", 3));
  }

showValue()
{
  alert("valore: "+this.value);
  this.value="";
}

}
