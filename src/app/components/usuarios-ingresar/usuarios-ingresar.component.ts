import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})
export class UsuariosIngresarComponent implements OnInit {
  user={  usuario:"", password:""};
  reintentar:boolean=false;
mensaje:string="";
  usuarios:any;
  constructor(private router:Router) { 
    this.usuarios = [
      { "id": "1",
        "nombre": "Pedro",
        "email": "pedro@email.net",
        "password": "123456",
        "rol": "admin",
      }, {
        "id": "2",
        "nombre": "Juan",
        "email": "juan@email.net",
        "password": "123456",
        "rol": "usuario",
      }, {
        "id": "3",
        "nombre": "Hugo",
        "email": "hugo@email.net",
        "password": "123456",
        "rol": "usuario",
      }, {
        "id": "4",
        "nombre": "Carlos",
        "email": "carlos@email.net",
        "password": "123456",
        "rol": "admin",
      },{
        "id": "5",
        "nombre": "Maria",
        "email": "maria@email.net",
        "password": "123456",
        "rol": "admin",
      }
    ];

  }

  ngOnInit(): void {
  }
  ingresar(){
		console.log("Sign In");
    console.log(this.user);
    if(this.validarUsuario(this.user.usuario,this.user.password)){
		  console.log("login correcto");
      //localStorage.setItem('token',result.token);
	    localStorage.setItem('token','LogInOK');
      this.router.navigate(['usuarios/home']);
		}
		else{
		  console.log("usurio y/o contraseña incorrectos");
      this.reintentar=true;
      this.mensaje="usuario y/o contraseña incorrectos";
		}
	}
  private validarUsuario(nombre:string, password:string):boolean{
    for (let usuario of this.usuarios) {
      if (usuario.nombre == nombre && usuario.password == password) {
        return true;
      }
    }
    return false;
  }
  recargarForm(){
    this.reintentar=false;
    this.user.usuario="";
    this.user.password="";
	this.mensaje="";
  }
   


}
