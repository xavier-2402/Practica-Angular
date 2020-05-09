import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
    selector:'app-estudiante',
    templateUrl:'./estudiante.component.html'
    
})

export class EstudianteComponent {
 
    estudiante:any={}
    constructor(private activatedRoute:ActivatedRoute,
        private estudianteService:EstudiantesService){
    
            this.activatedRoute.params.subscribe(
                params =>{
                    console.log(params['id']);
                    
                    this.estudiante= this.estudianteService.getEstudianteById(params['id']);
                }
            )
           
        }

}