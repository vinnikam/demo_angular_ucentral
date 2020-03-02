import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Respuesta } from '../entidades/respuesta';
import {Usuario} from "../entidades/usuario";

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  rutaservicio: string = 'http://172.20.74.124:8080/ServAuten/app/operacion/autenticar';
  rutaservicioversion: string = 'http://172.20.74.124:8080/ServAuten/app/operacion/autenticar';

  usuario: Usuario;
  constructor(private http: HttpClient) { }


 autenticar(nombre: string, clave: string): Promise<Respuesta> {
   const info = {
    "nombre":nombre,
    "clave":clave
   }
   return this.http.post<Respuesta>(`${this.rutaservicio}`, info).toPromise();
 }


 version(): Promise<Respuesta> {

  return this.http.post<Respuesta>(`${this.rutaservicioversion}`, null).toPromise();
}

}
