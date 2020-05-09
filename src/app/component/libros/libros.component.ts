import { Component, OnInit } from '@angular/core';
import { LibroService,Libro } from '../../servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: ['']
})
export class LibrosComponent implements OnInit {

  libros:any = {};

  constructor( private libroService: LibroService) { 
   // console.log(this.libros)
  }

  getLibros(){
    this.libroService.getLibros().subscribe((data:{Libro})=>{
      console.log(data);
      this.libros =data;
      
    })
  }


  ngOnInit(): void {
    this.getLibros()
  }

}
