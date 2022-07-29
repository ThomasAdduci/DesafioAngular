import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-desafio',
  templateUrl: './directivas-desafio.component.html',
  styleUrls: ['./directivas-desafio.component.css']
})
export class DirectivasDesafioComponent implements OnInit {
  nombre = 'Thomas Adduci';
  alumnos = [{
    nombre: 'Leo',
    apellido: 'Messi',
    nota: 'Aprobado'
  },{
    nombre: 'Diego',
    apellido: 'Maradona',
    nota: "Desaprobado"
  },{
    nombre: 'Gonzalo',
    apellido: 'Higuaín',
    nota: "Desaprobado"
  },{
    nombre: 'Matias',
    apellido: 'Alvarez',
    nota: "Desaprobado"
  },{
    nombre: 'Juan',
    apellido: 'Perez',
    nota: "Aprobado"
  }
  ,{
    nombre: 'Alberto',
    apellido: 'Batista',
    nota: "Aprobado"
  },{
    nombre: 'Alexis',
    apellido: 'Sanchez',
    nota: "Desaprobado"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
