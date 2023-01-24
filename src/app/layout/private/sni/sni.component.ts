import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sni',
  templateUrl: './sni.component.html',
  styleUrls: ['./sni.component.css']
})
export class SniComponent implements OnInit {

  sni: {
    nivel:'',
    anio:''
  }

  constructor() { 
    this.sni = {
      nivel:'',
      anio:''
    }
   }

  ngOnInit(): void {
  }

  guardar() {

  }

}
