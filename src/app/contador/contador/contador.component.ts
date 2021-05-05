import { Component } from '@angular/core';

//Decorador
@Component({
  selector: 'app-contador',
  // definir el template
  template:`

    <h1>  {{titulo}}  </h1>
    <h3> La base es de : <strong>{{base}}</strong> </h3>

    <button (click)="acumular(base)">+{{base}}</button>

    <span> {{numero}} </span>

    <button (click)="acumular(-base)">-{{base}}</button>

  `
})


//export  porque la vamos usar fuera del archivo
export class ContadorComponent{

  public titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular( base: number ){
    this.numero += base;
  }

}
