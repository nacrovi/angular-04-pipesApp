import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'nacho';
  nombreUpper: string = 'NACHO';
  nombreCompleto: string = 'nacHo rOig';

  fecha: Date = new Date(); //el día de hoy

}
