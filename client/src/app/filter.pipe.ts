import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false     // <!-- We mark the pipe as "impure"
})
// export class FilterPipe implements PipeTransform {
//
//   transform(items: any[], field: string, value: string): any[] {
//     if (!items) {
//       return [];
//     }
//
//     if (!value) {
//       return items;
//     }
//
//     const myPattern = new RegExp(value, 'i');
//     return items.filter(it => it[field].match(myPattern));
//   }
// }

export class FilterPipe implements PipeTransform {
    transform(items: any[], filterBy: string): any {
        return items.filter(item => item.id.indexOf(filterBy) !== -1);
    }
}

// export class FilterPipe implements PipeTransform {
//     transform(items: any[], term: string): any {
//         // I am unsure what id is here. did you mean title?
//         return items.filter(item => item.id.indexOf(term) !== -1);
//     }
// }
