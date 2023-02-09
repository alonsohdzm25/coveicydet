import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css'],
})
export class DocumentosComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  salir() {
    this.authService.logout();
  }
}
