import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos-revista-indexada',
  templateUrl: './articulos-revista-indexada.component.html',
  styleUrls: ['./articulos-revista-indexada.component.css']
})
export class ArticulosRevistaIndexadaComponent implements OnInit {

  articulo = {
    titulo: '',
    autor: '',
    fechaAceptado: '',
    fechaPublicado: '',
    revista: '',
    pertenece: '',
    referencia: ''
    }

    lista = ["Thomson Reuters Master Journal List", "Journal Citation Report", "Indice de Revistas"]

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {

  }

}
