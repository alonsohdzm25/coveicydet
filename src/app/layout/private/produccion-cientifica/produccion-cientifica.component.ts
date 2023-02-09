import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-produccion-cientifica',
  templateUrl: './produccion-cientifica.component.html',
  styleUrls: ['./produccion-cientifica.component.css'],
})
export class ProduccionCientificaComponent implements OnInit {
  libros: {
    titulo: '';
    autor: '';
    editorial: '';
    referencia: '';
  };

  constructor(private authService: AuthService) {
    this.libros = {
      titulo: '',
      autor: '',
      editorial: '',
      referencia: '',
    };
  }

  ngOnInit(): void {}
  salir() {
    this.authService.logout();
  }

  guardar() {}
}
