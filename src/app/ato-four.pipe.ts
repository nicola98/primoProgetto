import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'atoFour'
})
export class AtoFourPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace('a', '4');
  }

}
