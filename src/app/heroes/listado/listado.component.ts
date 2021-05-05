import { Component} from '@angular/core';
//import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

//OnInit -- primer ciclo de vida
//export class ListadoComponent implements OnInit {
  //constructor() {
  //  console.log('constructor');
  //}
  //Se usa para inicializar cosas (peticiones a un servicio)
  //ngOnInit(): void {
  //  console.log('ngOnInit');
  //}

//}

export class ListadoComponent{

  heroes: string[] = ['Thor','Loky','Hulk','SpiderMan'];

  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando ...');
    //this.heroes.shift();
    //const heroeBorrado = this.heroes.shift();
    //console.log(heroeBorrado);

    this.heroeBorrado = this.heroes.shift() || '';
  }

}


