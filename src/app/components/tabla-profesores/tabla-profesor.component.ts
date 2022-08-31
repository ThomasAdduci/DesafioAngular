import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface Profesor { 
  idProfesor: number;
  nombre: string;
  apellido: string;
  email: string;
  edad: number;
  curso: string;
  cursadaActiva: boolean;
}

const ELEMENT_DATA: Profesor[] = [
  {idProfesor: 1, nombre: 'Mark', apellido: 'Antonio', email: 'markant@mail.com', edad: 45, curso: 'Angular', cursadaActiva: true},
  {idProfesor: 2, nombre: 'Luz', apellido: 'Pinneti', email: 'luzpinneti@mail.com', edad: 32, curso: 'Reactive', cursadaActiva: true},
  {idProfesor: 3, nombre: 'Milagros', apellido: 'Cavaleiro', email: 'mcavaleiro@mail.com', edad: 27, curso: 'Desarrollo Web', cursadaActiva: false},
  {idProfesor: 4, nombre: 'Ricardo', apellido: 'Pallet', email: 'palletri@mail.com', edad: 56, curso: 'Inglés', cursadaActiva: false},
  {idProfesor: 5, nombre: 'Sebastián', apellido: 'Villa', email: 'sebasvilla@mail.com', edad: 26, curso: 'Marketing Digital', cursadaActiva: true},
  {idProfesor: 6, nombre: 'Santiago', apellido: 'Bernabeu', email: 'bernabeusantiago@mail.com', edad: 28, curso: 'UX/UI', cursadaActiva: true},
  {idProfesor: 7, nombre: 'Charlie', apellido: 'Puth', email: 'charlie@mail.com', edad: 33, curso: 'Bootstrap', cursadaActiva: true},
  {idProfesor: 8, nombre: 'Juan', apellido: 'Lavalle', email: 'juanlavalle@mail.com', edad: 25, curso: 'Metodologías Ágiles', cursadaActiva: false},
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ['idProfesor', 'nombre', 'apellido', 'email', 'edad', 'curso', 'cursadaActiva', 'acciones'];
  dataSource: MatTableDataSource<Profesor> = new MatTableDataSource(ELEMENT_DATA);
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: Profesor){
    this.dataSource.data = this.dataSource.data.filter((curso: Profesor) => curso.curso != elemento.curso);
  }

  editar(elemento: Profesor){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '400px',
      data: elemento
    });
  }
}
