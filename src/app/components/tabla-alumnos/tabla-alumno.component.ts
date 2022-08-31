import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface Alumno { 
  idAlumno: number;
  nombre: string;
  apellido: string;
  email: string;
  edad: number;
  comision: string;
  matriculaPaga: boolean;
}

const ELEMENT_DATA: Alumno[] = [
  {idAlumno: 1, nombre: 'Julian', apellido: 'Lopez Silveyra', email: 'jlopezs@mail.com', edad: 23, comision: '23310', matriculaPaga: true},
  {idAlumno: 2, nombre: 'Martín', apellido: 'Gómez', email: 'mgomez@mail.com', edad: 29, comision: '33456', matriculaPaga: true},
  {idAlumno: 3, nombre: 'Jesica', apellido: 'Martinez', email: 'jessm@mail.com', edad: 19, comision: '33456', matriculaPaga: false},
  {idAlumno: 4, nombre: 'Luana', apellido: 'Mirim', email: 'luana98@mail.com', edad: 21, comision: '45548', matriculaPaga: false},
  {idAlumno: 5, nombre: 'Santiago', apellido: 'Martinez', email: 'santimartinez@mail.com', edad: 26, comision: '23310', matriculaPaga: true},
  {idAlumno: 6, nombre: 'Milagros', apellido: 'Barreras', email: 'miliba@mail.com', edad: 26, comision: '45548', matriculaPaga: true},
  {idAlumno: 7, nombre: 'Evanese', apellido: 'Gloria', email: 'evagloria@mail.com', edad: 32, comision: '23310', matriculaPaga: true},
  {idAlumno: 8, nombre: 'Diego', apellido: 'Maradona', email: 'lamanodedios@mail.com', edad: 55, comision: '23310', matriculaPaga: false},
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ['idAlumno', 'nombre', 'apellido', 'email', 'edad', 'comision', 'matriculaPaga', 'acciones'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource(ELEMENT_DATA);
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: Alumno){
    this.dataSource.data = this.dataSource.data.filter((curso: Alumno) => curso.comision != elemento.comision);
  }

  editar(elemento: Alumno){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '400px',
      data: elemento
    });
  }
}

