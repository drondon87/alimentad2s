import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medidas'
})
export class MedidasPipe implements PipeTransform {

  transform(value: number, tipo: 'K'|'C'|'M'|'P'|'c'|'Mt'|'k'|'KM'): string {

    if(value){
      switch (tipo) {
        case 'K': return `${value} Kgs`;
        case 'C': return `${value} cm2`;
        case 'c': return `${value} cm`;
        case 'M': return `${value} mm`;
        case 'P': return `${value} %`;
        case 'Mt': return `${value} mts`;
        case 'k': return `${value} Kg`;
        case 'KM': return `${value} kg/mts2`;
      }
    }
    return null;
  }

}
