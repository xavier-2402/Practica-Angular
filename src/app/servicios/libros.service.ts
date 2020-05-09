import { HttpClient } from '@angular/common/http'
import { Observable,of} from 'rxjs'
import { map,catchError, tap} from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class LibroService{
    constructor(private http:HttpClient){

    }

    getQuery(query:string){
        const url =` https://jsonplaceholder.typicode.com/${query}`;
        console.log(url);

        //let body ={
          //  nombre: "",
            //descripcion:""

        //}
        return this.http.get(url);

    }

    getLibros():Observable<any>{
        const url='posts';
        return this.getQuery(url);

    }
    getLibrosById(id:string)
    {
        const url='posts';
      return this.getQuery(url);
    }
}

export interface Libro{
    title:string,
    body:string,
    id?:number
}

