import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService{
	API_URI = 'http://localhost:3000/user';
	
	constructor(/*private http: HttpClient*/){}

	listarUsuarios(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		//return this.http.get(`${this.API_URI}/list`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	
	buscarUsuario(id:string){
		//return this.http.get(`${this.API_URI}/find/${id}`);
	}
  isLoggedIn():Boolean{
		return !!localStorage.getItem('token'); //Si existe token retorna true
		//es el equivalente de testearlo con if pero ahora en una sola linea.
	}
  //borra datos local storage
  logOut(){
		localStorage.removeItem('token');
	}
}