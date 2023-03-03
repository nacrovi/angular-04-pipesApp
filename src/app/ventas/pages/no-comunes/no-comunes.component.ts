import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Nacho';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Eduardo', 'Nacho', 'Fernando'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(nombre: string) {
    console.log(nombre);
    if (nombre === 'Nacho'){
      this.nombre = 'Susana';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Nacho';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(3000); //01,1,2,3,4,5,6,

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve ('Tenemos data de promesa');
    }, 3500)

  });

}
