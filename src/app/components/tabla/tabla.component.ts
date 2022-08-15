import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface Curso { 
  nombre: string;
  comision: string;
  profesor: string;
  numeroEstudiantes: number;
  matriculaAbierta: boolean;
}

const ELEMENT_DATA: Curso[] = [
  {nombre: 'Angular', comision: '32310', profesor: 'Leo Messi', numeroEstudiantes: 65, matriculaAbierta: true},
  {nombre: 'VueJS', comision: '33320', profesor: 'Gonzalo Higuaín', numeroEstudiantes: 34, matriculaAbierta: true},
  {nombre: 'ReactJS', comision: '35310', profesor: 'Paulo Dybala', numeroEstudiantes: 87, matriculaAbierta: false},
  {nombre: 'UI/UX', comision: '31310', profesor: 'Julián Álvarez', numeroEstudiantes: 12, matriculaAbierta: true},
  {nombre: '.NET', comision: '38310', profesor: 'Nicolás Otamendi', numeroEstudiantes: 90, matriculaAbierta: false},
  {nombre: 'SQL', comision: '31310', profesor: 'Cuti Romero', numeroEstudiantes: 44, matriculaAbierta: true},
  {nombre: 'Web 3.0', comision: '32380', profesor: 'Leandro Paredes', numeroEstudiantes: 63, matriculaAbierta: true}
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ['nombre', 'comision', 'profesor', 'numeroEstudiantes', 'matriculaAbierta', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(ELEMENT_DATA);
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: Curso){
    this.dataSource.data = this.dataSource.data.filter((curso: Curso) => curso.comision != elemento.comision);
  }

  editar(elemento: Curso){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '400px',
      data: elemento
    });
  }
}
