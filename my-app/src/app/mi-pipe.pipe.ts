import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
  standalone: true
})
export class MiPipePipe implements PipeTransform {

  transform(valor: string | undefined): string {
    return valor?.toUpperCase() || '';
  }

}
