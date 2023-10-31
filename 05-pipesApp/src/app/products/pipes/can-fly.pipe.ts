import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    // if (value === true) {
    //   return 'Pued evolar';
    // }
    // else{
    //   return 'No pued evolar';
    // }

    return value ? 'Puede volar':  'No pued evolar';
  }

}
