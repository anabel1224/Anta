import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit {
  revelar:boolean=true;

  usuarios = [{
    "id": "1",
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
  }];
  seleccionMult:any[] = [];
  constructor() {
  
   }

  ngOnInit(): void {
  }
  procesar():void{
    console.log("Capturando el formulario");
  }
  addRemoveItem($event:any):void{
    console.log("Capturando el checkbox");
    
    //Si checked es verdadero agregamos un item al array seleccionMult. Sino, remover 
    if($event.target.checked){
      //push agrega un nuevo elemento al array
      this.seleccionMult.push($event.target.value);
    }
    else{
      //splice quita elementos del array. Recibe splice(inicio, cuantos)
      //indexOf devuelve la posicion en el array del valor pasado por parametro
      this.seleccionMult.splice(this.seleccionMult.indexOf($event.target.value),1);
    }
	//el metodo sort mantiene el orden del array. Es conveniente porque las acciones del usuario no lo son
    this.seleccionMult.sort();
    console.log(this.seleccionMult);  
  }

}
