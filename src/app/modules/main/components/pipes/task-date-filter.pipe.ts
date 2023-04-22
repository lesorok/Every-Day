import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDateFilter',
})
export class TaskDateFilterPipe implements PipeTransform {
  transform(tasks: any[], day: Date): any[] {
    return tasks.filter(
      task => new Date(task.date).getDate() === day.getDate(),
    );
  }
}
