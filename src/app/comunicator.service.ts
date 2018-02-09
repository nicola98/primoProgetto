import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { personaggi } from './personaggi';

@Injectable()
export class ComunicatorService {
  private mySubject = new Subject<personaggi>();
  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value:personaggi){
    this.mySubject.next(value);
  }

}
