import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserServiceService } from '../../../services/user.service.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css'],
})
export class DatosGeneralesComponent implements OnInit {
  user = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    rfc: '',
    curp: '',
    sexo: '',
  };

  lista: string[] = ['Hombre', 'Mujer', 'No binario'];

  constructor(
    private authService: AuthService,
    private userService: UserServiceService
  ) {
    this.obtenerDatos();
  }

  ngOnInit(): void {}

  salir() {
    this.authService.logout();
  }

  guardar() {}

  obtenerDatos() {
    this.userService.getUser().subscribe({
      next: (res) => {
        if (res.message == 'Unauthorized')
          return alert('El token de usuario no es valido');
        this.user = res;
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
}
