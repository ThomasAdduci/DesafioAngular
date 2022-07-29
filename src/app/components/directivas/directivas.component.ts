import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  variable1: number = 3;
  variable2: string = "Agustin";
  arreglo: string[] = ['Item 1 ngFor', 'Item 2 ngFor', 'Item 3 ngFor'];
  urlImagen = 'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2021/03/12/16575/2021031202544061e0e3f25c3041f849de6b510817fb34.jpg';
  familiares = [
    {
    nombre: 'Thomas',
    apellido: 'Adduci'
  },{
    nombre: 'Juan',
    apellido: 'Gomez'
  },{
    nombre: 'Lautaro',
    apellido: 'Perez'
  }
];
  ahora = Date.now()
  constructor() { }

  ngOnInit(): void {
  }

  cambiarVariable1(){
    this.variable1 = Math.round(Math.random()*10)
  }

}
