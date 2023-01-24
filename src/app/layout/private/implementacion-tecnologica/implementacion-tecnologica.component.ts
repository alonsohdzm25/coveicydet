import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implementacion-tecnologica',
  templateUrl: './implementacion-tecnologica.component.html',
  styleUrls: ['./implementacion-tecnologica.component.css']
})
export class ImplementacionTecnologicaComponent implements OnInit {

  implementacion : {
    tipo: '',
    nombreProducto: '',
    noRegistro: '',
    fechaRegistro: '',
    referencia: ''
    }

  constructor() { 
    this.implementacion = {
      tipo: '',
      nombreProducto: '',
      noRegistro: '',
      fechaRegistro: '',
      referencia: ''
      }
  }

  ngOnInit(): void {
  }

  guardar() {
    
  }

}
