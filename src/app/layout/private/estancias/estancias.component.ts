import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estancias',
  templateUrl: './estancias.component.html',
  styleUrls: ['./estancias.component.css']
})
export class EstanciasComponent implements OnInit {

  estancia = {
    institucion: '',
    proyecto: '',
    fechaInicio: '',
    fechaTermino: '',
    referencia: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    
  }

}
