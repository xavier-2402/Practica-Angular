import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-libro-tarjeta',
  templateUrl: './libro-tarjeta.component.html',
  styles: []
})
export class LibroTarjetaComponent implements OnInit {
  @Input() libro:any={};
  @Input() indice:number;

  @Output() libroSeleccionado: EventEmitter<number>;


  constructor(private router:Router) {
    this.libroSeleccionado= new EventEmitter();

   }

  ngOnInit(): void {
  }

  verLibro(){
    console.log(this.indice)
    this.router.navigate(['/libro',this.indice])
  }

}
