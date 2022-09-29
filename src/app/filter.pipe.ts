import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // для того щоб пайп спрацьовував при кодній зміні в масиві або обєкті
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const newResultArr = [];
    for (const item of value) {
      if (item[propName].includes(filterString)) {
        newResultArr.push(item);
      }
    }
    return newResultArr;
  }
}
