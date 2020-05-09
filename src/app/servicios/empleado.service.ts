import { HttpClient } from '@angular/common/http'
import { Observable,of} from 'rxjs'
import { map,catchError, tap} from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { persona } from './persona'

@Injectable({
    providedIn:'root'
})

export class EmpleadoService{
    constructor(private http:HttpClient){

    }

    getQuery(query:string){
        const url =` http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);

    }
   


    getEmpleados():Observable<any>{
        const url='empleado';
        return this.getQuery(url);

    }
    getEmpleadoById(id:string)
    {
        const url='empleado';
      return this.getQuery(url);
    }
}




export class Empleado extends persona {
    private sueldo: number;
    private horario:string;


    getSueldo(){
        return this.sueldo
    }
    setSueldo( sueldo:number){
        this.sueldo = sueldo;
    }


    getHorario(){
        return this.horario
    }
    setHorario(horario:string){
        this.horario = horario;
    }



    getAllData(){
        return this.getNombre()+" "+this.getApellido()+" "+this.getEdad()+" "+this.getTelefono()+this.getSueldo()+" "+this.getHorario();
    }
   
}
