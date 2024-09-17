import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  Ac1: number = 0;
  Ac2: number = 0;
  Ag: number = 0;
  Af: number = 0;
  Media: number = 0;
  status: string = '';

  calcularMedia() {
    this.Media = (this.Ac1 * 0.15) + (this.Ac2 * 0.30) + (this.Ag * 0.10) + (this.Af * 0.45);
    this.status = this.Media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}

