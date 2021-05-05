import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

//decorador
@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'

})



export class HeroeComponent{

    nombre: string = 'The Winter Solider';
    edad: number = 40;

    //propiedad procesada
    get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
    }


    //metodos
    obtenerNombre(): string{
      //template construir un string
      return `${this.nombre} - ${this.edad}`;
    }

    //void para no regresas nada
    cambiarNombre(): void{
        this.nombre = 'Capitan America';
    }

    //void para no regresas nada
    cambiarEdad(): void{
      this.edad = 25;
    }

}
