import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosListarComponent} from "./components/usuarios-listar/usuarios-listar.component"
import {UsuariosIngresarComponent} from "./components/usuarios-ingresar/usuarios-ingresar.component"
import {UsuariosRegistrarComponent} from "./components/usuarios-registrar/usuarios-registrar.component"
import { VistaComponent } from './components/vista/vista.component';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { UsuariosHomeComponent } from './components/usuarios-home/usuarios-home.component';
import { AnimalRegistrarComponent } from './components/animal-registrar/animal-registrar.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
	{
		path: '',
		redirectTo: 'usuarios/principal',
		pathMatch: 'full'
	},
	{
		path: 'usuarios/listar',
		component: UsuariosListarComponent,
		canActivate: [AuthGuard]
		
	},
	{
		path: 'usuarios/ingresar',
		component: UsuariosIngresarComponent
	},
	{
		path: 'usuarios/registrar',
		component: UsuariosRegistrarComponent
	},
  {
		path: 'vista',
		component: VistaComponent
	},
	{
		path: 'usuarios/principal',
		component: UsuariosPrincipalComponent
	},
	{
		path: 'usuarios/home',
		component: UsuariosHomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'animal/registrar',
		component: AnimalRegistrarComponent,
		canActivate: [AuthGuard]
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
