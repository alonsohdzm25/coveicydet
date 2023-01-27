import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './layout/public/login/login.component';
import { RegistroComponent } from './layout/public/registro/registro.component';
import { DatosGeneralesComponent } from './layout/private/datos-generales/datos-generales.component';
import { ProduccionCientificaComponent } from './layout/private/produccion-cientifica/produccion-cientifica.component';
import { DocumentosComponent } from './layout/private/documentos/documentos.component';

import { AuthGuard } from './auth.guard';
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

const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'datos-generales', component: DatosGeneralesComponent, canActivate:[AuthGuard] },
  { path: 'produccion-cientifica', component: ProduccionCientificaComponent, canActivate:[AuthGuard] },
  { path: 'documentos', component: DocumentosComponent, canActivate:[AuthGuard]},
  { path: 'lugar-de-nacimiento', component: LugarNacimientoComponent, canActivate:[AuthGuard] },
  { path: 'domicilio', component: DomicilioComponent, canActivate:[AuthGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate:[AuthGuard] },
  { path: 'area-de-desarrollo', component: AreaDesarrolloComponent, canActivate:[AuthGuard] },
  { path: 'formacion-academica', component: FormacionAcademicaComponent, canActivate:[AuthGuard] },
  { path: 'proyectos-de-investigacion', component: ProyectosInvestigacionComponent, canActivate:[AuthGuard] },
  { path: 'patentes', component: PatentesComponent, canActivate: [AuthGuard] },
  { path: 'articulos-revista-indexada', component: ArticulosRevistaIndexadaComponent, canActivate:[AuthGuard] },
  { path: 'articulos-revista-de-divulgacion', component: ArticulosDivulgacionCientificaComponent, canActivate:[AuthGuard] },
  { path: 'implementacion-tecnologica', component: ImplementacionTecnologicaComponent, canActivate:[AuthGuard] },
  { path: 'grados-academicos-pnpc', component: GradosAcademicosPnpcComponent, canActivate:[AuthGuard] },
  { path: 'forma-obtencion-grados', component: FormaObtencionGradosComponent, canActivate:[AuthGuard] },
  { path: 'sni', component: SniComponent, canActivate:[AuthGuard] },
  { path: 'estancias', component: EstanciasComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
