import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpper'
})

// מחזיר את המילה באותיות גדולות
export class ToUpperPipe implements PipeTransform {

  transform(value: any): string {
    return value.toUpperCase()
  }

}
