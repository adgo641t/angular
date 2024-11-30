import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  transform(value:any, value_two:any) {
    let operaciones = `
    suma: ${value+value_two} <br/>
    resta:${value-value_two}<br/>
    multiplicacion${value*value_two}<br/>
    Division:${value/value_two}`
    return operaciones;
  }

}
