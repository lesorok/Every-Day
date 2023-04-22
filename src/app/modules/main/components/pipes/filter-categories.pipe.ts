import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../../../../shared/interface/task';

@Pipe({
  name: 'filterCategories',
})
export class FilterCategoriesPipe implements PipeTransform {
  transform(value: ITask[], category: string): any {
    if (category !== '') {
      return value.filter(post => post.category === category);
    } else {
      return value;
    }
  }
}
