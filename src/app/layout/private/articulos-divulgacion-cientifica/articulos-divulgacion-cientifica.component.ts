import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos-divulgacion-cientifica',
  templateUrl: './articulos-divulgacion-cientifica.component.html',
  styleUrls: ['./articulos-divulgacion-cientifica.component.css']
})
export class ArticulosDivulgacionCientificaComponent implements OnInit {

  articulo: {
    titulo: '',
    autor: '',
    fechaAceptado: '',
    fechaPublicado: '',
    revista: '',
    referencia: ''
    }

  constructor() {
    this.articulo = {
      titulo: '',
      autor: '',
      fechaAceptado: '',
      fechaPublicado: '',
      revista: '',
      referencia: ''
      }
  }

  ngOnInit(): void {
  }

  guardar() {
    
  }

}
