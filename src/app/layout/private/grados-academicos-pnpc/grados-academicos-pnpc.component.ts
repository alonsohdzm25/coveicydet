import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grados-academicos-pnpc',
  templateUrl: './grados-academicos-pnpc.component.html',
  styleUrls: ['./grados-academicos-pnpc.component.css']
})
export class GradosAcademicosPnpcComponent implements OnInit {

  grado: {
    nivel: '',
    titulo: '',
    institucion: '',
    anio: ''
  }

  nivel = ["Especialidad", "Maestria", "Doctorado"]

  constructor() {
    this.grado = {
      nivel: '',
      titulo: '',
      institucion: '',
      anio: ''
    }
   }

  ngOnInit(): void {
  }

  guardar(){
    
  }

}
