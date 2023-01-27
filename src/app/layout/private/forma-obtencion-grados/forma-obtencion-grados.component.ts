import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-obtencion-grados',
  templateUrl: './forma-obtencion-grados.component.html',
  styleUrls: ['./forma-obtencion-grados.component.css']
})
export class FormaObtencionGradosComponent implements OnInit {

  obtencion = {
    nombreTesis: '',
    institucion: '',
    anio: '',
    nivel: '',
    referencia: ''
  }

  nivel = ["Especialidad", "Maestria", "Doctorado"]

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {

  }

}
