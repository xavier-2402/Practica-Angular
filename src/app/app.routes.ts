import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from '../app/component/body/body.component';
import { EstudiantesComponent } from './component/estudiantes/estudiantes.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { LibroComponent } from './component/libro/libro.component';
import { LibrosComponent } from './component/libros/libros.component';
import { EmpleadoComponent } from './component/empleado/empleado.component';
import { EmpleadosComponent } from './component/empleados/empleados.component';


const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'estudiantes', component: EstudiantesComponent },
    { path: 'estudiante/:id', component: EstudianteComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'libro/:id', component:LibroComponent},
    { path: 'empleados', component: EmpleadosComponent},
    { path: 'empleado/:id', component: EmpleadoComponent},
   
   
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);