import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-estudiante-tarjeta',
  templateUrl: './estudiante-tarjeta.component.html',
  styles: []
})
export class EstudianteTarjetaComponent implements OnInit {

  @Input() estudiante:any={};
  @Input() indice:number;

  @Output() estudianteSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.estudianteSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verEstudiante(){
    console.log(this.indice);

    this.router.navigate(['/estudiante',this.indice])
  }

}
