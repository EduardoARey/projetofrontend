import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  operacao: string = 'soma';
  resultado: number = 0;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'subtracao':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacao':
        this.resultado = this.num1 * this.num2;
        break;
      case 'divisao':
        this.resultado = this.num1 / this.num2;
        break;
    }
  }
}
