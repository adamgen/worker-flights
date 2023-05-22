import { Pipe, PipeTransform } from '@angular/core';
import formatDuration from 'date-fns/formatDuration';

@Pipe({
  name: 'minuteDuration',
  standalone: true,
})
export class MinuteDurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return formatDuration({ hours, minutes });
  }
}
