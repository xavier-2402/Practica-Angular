import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../../servicios/libros.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',

})
export class LibroComponent  {

  libro:any={};

  constructor( private activatedRoute:ActivatedRoute,
    private libroService:LibroService) { 
      this.activatedRoute.params.subscribe(
        params=>{
          console.log(params['id']);
          this.libro = this.libroService.getLibrosById(params['id'])
        }
      )
    }

 

}
