import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-registrar',
  templateUrl: './usuarios-registrar.component.html',
  styleUrls: ['./usuarios-registrar.component.css']
})
export class UsuariosRegistrarComponent implements OnInit {
  user={  nombre:"",apellido:"",dni:"",telefono:"",edad:"", email:"", password:"",repassword:""};
  errorNombre=0;
  errorApellido=0;
  errorDni=0;
  errorTelefono=0;
  errorEdad=0;
  errrorPassword=0;
  errorRePassrword=0;
  errorEmail=0;
  constructor() { }

  ngOnInit(): void {
  }
  registrar(){
		console.log("Sign Up");
    console.log(this.user);
	}
  verificarForm():boolean{
    this.errorNombre=this.verificarNombre(this.user.nombre);
    this.errorApellido=this.verificarApellido(this.user.apellido);
    this.errorDni=this.verificarDni(this.user.dni);
    this.errorDni=this.verificarDni(this.user.dni);
    this.errorTelefono=this.verificarTelefono(this.user.telefono);
    this.errorEdad=this.verificarEdad(this.user.edad);
    
    this.errrorPassword=this.verificarPassword(this.user.password);
    this.errorRePassrword=this.verificarRePassword(this.user.password, this.user.repassword);
    this.errorEmail=this.verificarEmail(this.user.email);
    if(  (this.errorNombre+this.errrorPassword+this.errorRePassrword+this.errorEmail+this.errorApellido+this.errorDni+this.errorTelefono)>0){
      return false;
    }
    return true;
  }
  private verificarNombre(nombre:string):number {
    const patron=/^[a-zA-z]+$/;
    if(nombre.length==0)
      return 1;
    if(nombre.length>20)
      return 2;
    if(!patron.test(nombre))
      return 3;
    return 0;
  }
  private verificarApellido(apellido:string):number {
    const patron=/^[a-zA-z]+$/;
    if(apellido.length==0)
      return 1;
    if(apellido.length>20)
      return 2;
    if(!patron.test(apellido))
      return 3;
    return 0;
  }
  private verificarDni(dni:any): number {
    const patron=/^[0-9]{1,}$/;
    if(dni.length==0)
      return 1;
    if(dni.length>9)
      return 2;
    if(!patron.test(dni))
      return 3;
      if(dni.length<10)
      return 4;
    return 0;
  }
  private verificarEdad(edad:any): number {
    const patron=/^[0-9]{1,2}$/;
    if(edad.length==0)
      return 1;
    if(edad.length>2)
      return 2;
    if(!patron.test(edad))
      return 3;
    return 0;
  }
  private verificarTelefono(telefono:any): number {
    const patron=/^[0-9]{1,10}$/;
    if(telefono.length==0)
      return 1;
    if(telefono.length>10)
      return 2;
    if(!patron.test(telefono))
      return 3;
    
    return 0;
  }
  
  private verificarPassword(password:any): number {
    const patron=/^[A-Za-z0-9]{6,}$/;
    if(password.length==0)
      return 1;
    if(password.length>20)
      return 2;
    if(!patron.test(password))
      return 3;
    return 0;
  }
  
  private verificarRePassword(password:any, repassword:any): number {
    if(password!=repassword){
      return 1;
    }
    return 0;
  }
  
  private verificarEmail(email:any): number {
    const patron=/^[a-z0-9]{1,10}@[a-z0-9]{1,10}.[a-z]{2,3}$/;
    if(email.length==0)
      return 1;
    if(email.length>20)
      return 2;
    if(!patron.test(email))
      return 3;
    return 0;
  }
  limpiarNombre() {
    if (this.errorNombre > 0) {
      console.log("Limpiar nombre");
      this.user.nombre = "";
      this.errorNombre = 0;
    }
  }

  limpiarPassword() {
    if (this.errrorPassword > 0) {
      console.log("Limpiar password");
      this.user.password = "";
      this.errrorPassword = 0;
    }
  }

  limpiarRePassword() {
    if (this.errorRePassrword > 0) {
      console.log("Limpiar repassword");
      this.user.repassword = "";
      this.errorRePassrword = 0;
    }

  }

  limpiarEmail() {
    if(this.errorEmail>0){
      console.log("Limpiar email");
      this.user.email = "";
      this.errorEmail = 0;
    }
  }
  limpiarEdad() {
    if (this.errorEdad > 0) {
      console.log("Limpiar repassword");
      this.user.edad = "";
      this.errorEdad = 0;
    }

  }
  limpiarDni() {
    if (this.errorDni > 0) {
      console.log("Limpiar repassword");
      this.user.dni = "";
      this.errorDni = 0;
    }

  }


  limpiarApellido() {
    if (this.errorApellido > 0) {
      console.log("Limpiar repassword");
      this.user.apellido = "";
      this.errorApellido = 0;
    }

  }
  limpiarTelefono() {
    if (this.errorTelefono > 0) {
      console.log("Limpiar repassword");
      this.user.telefono = "";
      this.errorTelefono = 0;
    }

  }

  
}
