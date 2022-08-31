import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { RedesComponent } from './components/redes/redes.component';
import { HeaderComponent } from './components/header/header.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BotonesLogComponent } from './components/botones-log/botones-log.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { EditpersonaComponent } from './components/sobremi/editpersona.component';
import { EditestudioComponent } from './components/estudios/editestudio.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';

const firebaseConfig = {
  apiKey: "AIzaSyA5tnHHvdAQT7HdmklCjiwz8RyrjzT22Ho",
  authDomain: "portfolio-ap-b079f.firebaseapp.com",
  projectId: "portfolio-ap-b079f",
  storageBucket: "portfolio-ap-b079f.appspot.com",
  messagingSenderId: "706218955162",
  appId: "1:706218955162:web:d9fa36744ab26e6112aa23",
  measurementId: "G-0FZ50TLN4F"
};

@NgModule({
  declarations: [
    AppComponent,
    LogoapComponent,
    RedesComponent,
    HeaderComponent,
    SobremiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    CursosComponent,
    IdiomasComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    BotonesLogComponent,
    EditexperienciaComponent,
    EditpersonaComponent,
    EditestudioComponent,
    AltausuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 85,
      outerStrokeWidth: 20,
      space: 5,
      innerStrokeWidth: 3,
      innerStrokeColor: "#777",
      outerStrokeColor: "#FEE440",
      animationDuration: 500,
      animation: true,
      showSubtitle: true,
      showUnits: false,
      subtitleFontSize: "18",
      titleColor: "#222",
      subtitleColor: "#222",
      titleFontWeight : "700",
      subtitleFontWeight : "700"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
