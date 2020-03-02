import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../entidades/usuario";
import {OperacionesService} from "../../servicios/operaciones.service";
import {updateSuperClassAbstractMembersContext} from "@angular/core/schematics/migrations/static-queries/strategies/usage_strategy/super_class_context";
import {Router} from "@angular/router";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  dato: Usuario;

  constructor(private servicio: OperacionesService,
              private router: Router) {

  }

  ngOnInit(): void {
    if(this.servicio.usuario != null){
      this.dato = this.servicio.usuario;
    }else{
      this.dato = {
        "nombre": "",
        "correo": "",
        "clave": "",

      }
    }
  }
  salir(){
    this.router.navigate(['inicio']);
  }
}
