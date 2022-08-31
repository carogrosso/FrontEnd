import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { EditestudioComponent } from './components/estudios/editestudio.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditpersonaComponent } from './components/sobremi/editpersona.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'altausuario', component: AltausuarioComponent},
  {path: 'editexp/:id', component: EditexperienciaComponent},
  {path: 'editperso/:id', component: EditpersonaComponent},
  {path: 'editestu/:id', component: EditestudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
