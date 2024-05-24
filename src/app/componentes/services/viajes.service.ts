import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  // creamos la variable con la nueva e¿injeccion de angular 17 para poder importar la dependencia de
  //http cliente y utilizar los metodos
  private readonly _http = inject(HttpClient);
  //creamos la variable (usuamente va en enviroments la direcciones de la api) donde obtenemos la URL de las api
  private readonly _endPoint = "http://localhost:4000/usuarios";

  // se inicializa el metodo que llama al servicio para obtener los datos del usuario
  // traidos desde el back
  constructor(){
    this.getUsuarios();
  }

  // metodo para obtener la informacion de la api de usuarios
  getUsuarios() {
    //metodo get que es de cualquier tipo (se debe rear una interfaz con los daotos a obtener) donde se llama al endpoint
      return this._http.get<Usuario[]>(`${this._endPoint}?sort=desc`)
  }
}
