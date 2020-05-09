import { Component, OnInit } from '@angular/core';
import { EmpleadoService, Empleado } from '../../servicios/empleado.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {
  
  empleados:any={};

  constructor( private empleadoService: EmpleadoService) { 

  }
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((data:{Empleado})=>{
      console.log(data);
      this.empleados=data;

    })
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

}
