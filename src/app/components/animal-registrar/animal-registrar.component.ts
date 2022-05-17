import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-registrar',
  templateUrl: './animal-registrar.component.html',
  styleUrls: ['./animal-registrar.component.css']
})
export class AnimalRegistrarComponent implements OnInit {

  user={  nombre:"",apellido:"",sexo:"",raza:"",edad:"", descripcion:""};
  errorNombre=0;
  errorApellido=0;
  errorSexo=0;
  errorRaza=0;
  errorEdad=0;
  errorDescripcion=0;
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
    this.errorRaza=this.verificarRaza(this.user.raza);
    this.errorSexo=this.verificarSexo(this.user.sexo);
    this.errorDescripcion=this.verificarDescripcion(this.user.descripcion);
    this.errorEdad=this.verificarEdad(this.user.edad);
    
  
    if(  (this.errorNombre+this.errorApellido+this.errorEdad+this.errorRaza+this.errorSexo+this.errorDescripcion)>0){
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
  private verificarRaza(raza:string):number {
    const patron=/^[a-zA-z]+$/;
    if(raza.length==0)
      return 1;
    if(raza.length>20)
      return 2;
    if(!patron.test(raza))
      return 3;
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
  private verificarSexo(nombre:string):number {
    const patron=/^[a-zA-z]+$/;
    if(nombre.length==0)
      return 1;
    if(nombre.length>20)
      return 2;
    if(!patron.test(nombre))
      return 3;
    return 0;
  }
  private verificarDescripcion(nombre:string):number {
    const patron=/^[a-zA-z]+$/;
    if(nombre.length==0)
      return 1;
    if(nombre.length>50)
      return 2;
    if(!patron.test(nombre))
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
  limpiarRaza() {
    if (this.errorRaza > 0) {
      console.log("Limpiar raza");
      this.user.raza= "";
      this.errorRaza = 0;
    }
  }

  limpiarSexo() {
    if (this.errorSexo > 0) {
      console.log("Limpiar sexo");
      this.user.sexo = "";
      this.errorSexo = 0;
    }
  }

  
 
  limpiarEdad() {
    if (this.errorEdad > 0) {
      console.log("limpiar edad");
      this.user.edad = "";
      this.errorEdad = 0;
    }

  }
  limpiarDescripcion() {
    if (this.errorDescripcion > 0) {
      console.log("limpiar descripcion");
      this.user.descripcion = "";
      this.errorDescripcion = 0;
    }

  }
  

  limpiarApellido() {
    if (this.errorApellido > 0) {
      console.log("Limpiar apellido");
      this.user.apellido = "";
      this.errorApellido = 0;
    }

  }
 
}
