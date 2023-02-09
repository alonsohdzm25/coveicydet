import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthService } from 'src/app/services/auth.service';
import { UserServiceService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class DatosGeneralesComponent implements OnInit {

  user = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    rfc: "",
    curp: "",
    sexo: ""
  }

  lista : string[] = ["Hombre", "Mujer", "No binario"]
  
  constructor(
    private authService: AuthService,
    private userService: UserServiceService
    ) { 
      
    }

  ngOnInit(): void {
  }

  salir() {
    this.authService.logout();
  }

  guardar() {
    this.obtenerDatos()
  }

  obtenerDatos() {
    
    this.userService.getUser().subscribe({
      next: res => {
        if(res.message == "Unauthorized") return alert("El token de usuario no es valido")
        this.user = res
      },
      error: err => {
        alert(err.message)
      }
    })
  }

}
