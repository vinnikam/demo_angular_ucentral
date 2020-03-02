import { Component, OnInit } from '@angular/core';
import {Respuesta} from "../../entidades/respuesta";
import {OperacionesService} from "../../servicios/operaciones.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {

  title = 'appangular';

  nombre: string;
  correo: string;
  clavew = '123';

  mirespuesta: Respuesta;

  constructor(private servicio: OperacionesService, private router: Router) { }

  ngOnInit(): void {
  }
  llamar() {


    if (this.nombre === undefined || this.correo === undefined){
      alert('Los datos estan vacios');
      return ;
    }
    if(this.nombre.toUpperCase() === 'JULIAN'){
      const  dato = {
        "nombre": "Julian",
        "correo": "Julian@correo",
        "clave": "123",

      }
      this.servicio.usuario = dato;
      this.router.navigate(['datos']);
    }else{
      alert ('No existe');
    }
    return ;
    const x: Promise<Respuesta> =  this.servicio.autenticar(this.nombre, this.correo);

    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta.codigo === 1){
        alert ('- - - - - - -- - - - El usuario existe');
      }else {
        alert (' * * * * * * * * * *  *El usuario no existe');
      }

    });


  }
  otrollamdo(){
    this.servicio.version();
    this.mirespuesta.codigo;
  }
}

