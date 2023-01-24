import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/public/login/login.component';
import { DatosGeneralesComponent } from './layout/private/datos-generales/datos-generales.component';
import { RegistroComponent } from './layout/public/registro/registro.component';
import { RecuperarPasswordComponent } from './layout/public/recuperar-password/recuperar-password.component';
import { ProduccionCientificaComponent } from './layout/private/produccion-cientifica/produccion-cientifica.component';
import { DocumentosComponent } from './layout/private/documentos/documentos.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LugarNacimientoComponent } from './layout/private/lugar-nacimiento/lugar-nacimiento.component';
import { DomicilioComponent } from './layout/private/domicilio/domicilio.component';
import { ContactoComponent } from './layout/private/contacto/contacto.component';
import { AreaDesarrolloComponent } from './layout/private/area-desarrollo/area-desarrollo.component';
import { FormacionAcademicaComponent } from './layout/private/formacion-academica/formacion-academica.component';
import { ProyectosInvestigacionComponent } from './layout/private/proyectos-investigacion/proyectos-investigacion.component';
import { PatentesComponent } from './layout/private/patentes/patentes.component';
import { ArticulosRevistaIndexadaComponent } from './layout/private/articulos-revista-indexada/articulos-revista-indexada.component';
import { ArticulosDivulgacionCientificaComponent } from './layout/private/articulos-divulgacion-cientifica/articulos-divulgacion-cientifica.component';
import { ImplementacionTecnologicaComponent } from './layout/private/implementacion-tecnologica/implementacion-tecnologica.component';
import { GradosAcademicosPnpcComponent } from './layout/private/grados-academicos-pnpc/grados-academicos-pnpc.component';
import { FormaObtencionGradosComponent } from './layout/private/forma-obtencion-grados/forma-obtencion-grados.component';
import { SniComponent } from './layout/private/sni/sni.component';
import { EstanciasComponent } from './layout/private/estancias/estancias.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatosGeneralesComponent,
    RegistroComponent,
    RecuperarPasswordComponent,
    ProduccionCientificaComponent,
    DocumentosComponent,
    LugarNacimientoComponent,
    DomicilioComponent,
    ContactoComponent,
    AreaDesarrolloComponent,
    FormacionAcademicaComponent,
    ProyectosInvestigacionComponent,
    PatentesComponent,
    ArticulosRevistaIndexadaComponent,
    ArticulosDivulgacionCientificaComponent,
    ImplementacionTecnologicaComponent,
    GradosAcademicosPnpcComponent,
    FormaObtencionGradosComponent,
    SniComponent,
    EstanciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
