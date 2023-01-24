import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patentes',
  templateUrl: './patentes.component.html',
  styleUrls: ['./patentes.component.css']
})
export class PatentesComponent implements OnInit {

  patente : {
    tipo: '',
    nombreProducto: '',
    numeroRegistro: '',
    fecha: '',
    referencia: ''
  }

  constructor() { 
    this.patente = {
      tipo: '',
      nombreProducto: '',
      numeroRegistro: '',
      fecha: '',
      referencia: ''
    }
   }

  ngOnInit(): void {
  }

  guardar() {
    
  }

}
