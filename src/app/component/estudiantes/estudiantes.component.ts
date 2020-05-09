import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
    selector:'app-estudiantes',
    templateUrl:'./estudiantes.component.html'
    
})

export class EstudiantesComponent implements OnInit{
    
    estudiantes: any = {}
    

    constructor(private estudianteService:EstudiantesService){
        this.estudiantes = estudianteService.getEstudiante();
        console.log(this.estudiantes);
        
    }
    ngOnInit(){

    }
}