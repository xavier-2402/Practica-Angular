import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import { EstudianteTarjetaComponent } from './component/estudiante-tarjeta/estudiante-tarjeta.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudiantesComponent } from './component/estudiantes/estudiantes.component';
import { APPROUTING } from './app.routes';
import { EstudiantesService } from './servicios/estudiantes.service';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { LibroComponent } from './component/libro/libro.component';
import { LibrosComponent } from './component/libros/libros.component';
import { LibroTarjetaComponent } from './component/libro-tarjeta/libro-tarjeta.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LibroService } from './servicios/libros.service';
import { LoadingComponent } from './component/utils/loading/loading.component';
import { EmpleadoComponent } from './component/empleado/empleado.component';
import { EmpleadosComponent } from './component/empleados/empleados.component';
import { EmpleadoTarjetaComponent } from './component/empleado-tarjeta/empleado-tarjeta.component';
import { EmpleadoService } from './servicios/empleado.service';
import { ModalComponent } from './component/modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    EstudianteTarjetaComponent,
    EstudiantesComponent,
    EstudianteComponent,
    BuscadorComponent,
    LibroComponent,
    LibrosComponent,
    LibroTarjetaComponent,
    LoadingComponent,
    EmpleadoComponent,
    EmpleadosComponent,
    EmpleadoTarjetaComponent,
    ModalComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING
  ],
  providers: [
    EstudiantesService,
    LibroService,
    EmpleadoService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
