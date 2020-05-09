import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-empleado-tarjeta',
  templateUrl: './empleado-tarjeta.component.html',
  styles: []
})
export class EmpleadoTarjetaComponent implements OnInit {
  @Input() empleado:any={};
  @Input() indice:number;

  @Output() empleadoSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    this.empleadoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verEmpleado(){
    console.log(this.indice)
    this.router.navigate(['/empleado',this.indice])
  }

}
