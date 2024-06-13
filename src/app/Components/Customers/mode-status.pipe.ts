import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modeStatus',
  standalone: true
})
export class ModeStatusPipe implements PipeTransform {

  transform(status: string): string {
    return status === 'Active' ? 'status-active' : 'status-not-active';
}
}