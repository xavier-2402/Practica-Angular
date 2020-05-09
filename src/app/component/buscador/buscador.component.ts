import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../servicios/estudiantes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  estudiantes:any[]=[];
  termino:string;
 

  constructor( private estudiantesService : EstudiantesService,private activatedRoute:ActivatedRoute) {
    ;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params=>{
      this.termino = params['termino'];
      this.estudiantes = this.estudiantesService.buscarEstudiantes(this.termino);
      console.log(this.estudiantes);
    })
  }
}
