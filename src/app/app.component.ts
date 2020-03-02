import { Component } from '@angular/core';
import { OperacionesService } from './servicios/operaciones.service';
import { Respuesta } from './entidades/respuesta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appangular';

  nombre: string;
  correo: string;
  clavew = '123';

  mirespuesta: Respuesta;




  constructor(private servicio: OperacionesService) {

  }

  llamar() {

    
    if (this.nombre === undefined || this.correo === undefined){
      alert('Los datos estan vacios');
      return ;
    }
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
