import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-investigacion',
  templateUrl: './proyectos-investigacion.component.html',
  styleUrls: ['./proyectos-investigacion.component.css']
})
export class ProyectosInvestigacionComponent implements OnInit {

  proyecto: {
    referencia: '',
    titulo: '',
    participacion: '',
    fechaInicio: '',
    fechaTermino: '',
    area: '',
    institucionPrincipal: '',
    institucionAsociada: '',
    fuenteFinanciamiento:'',
    montoFinanciamiento: '',
    productosDerivados:'',
    usuarios: ''
    }

    fuente = ["Gobierno federal","Gobierno estatal", "CONACYT", "ONG", "FOMIX", "Institucion perteneciente","Otro"]
    producto = ["Reporte tecnico", "Prototipo", "Publicación"]
  constructor() { 
    this.proyecto = {
      referencia: '',
      titulo: '',
      participacion: '',
      fechaInicio: '',
      fechaTermino: '',
      area: '',
      institucionPrincipal: '',
      institucionAsociada: '',
      fuenteFinanciamiento:'',
      montoFinanciamiento: '',
      productosDerivados:'',
      usuarios: ''
      }
   }

  ngOnInit(): void {
  }

  guardar() {

  }

}
