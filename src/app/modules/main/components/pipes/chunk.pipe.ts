import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chunk' })
export class ChunkPipe implements PipeTransform {
  transform(arr: any[], size: number): any[][] {
    if (!arr || !arr.length) return [];
    return arr.reduce(
      (chunks, _, i) =>
        i % size ? chunks : [...chunks, arr.slice(i, i + size)],
      [],
    );
  }
}
