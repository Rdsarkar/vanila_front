import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


  transform(items: any[], field: string, value: string): any[] {

    // console.log(value);
    if (!items) {
      return  items;
    }
    if (!field || !value || value == "") {
      return items;
    }

    return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
  }

}
