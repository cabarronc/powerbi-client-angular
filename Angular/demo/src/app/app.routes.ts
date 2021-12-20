import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Administracion/Usuarios/usuarios/usuarios.component';
import { HomeComponent } from './Component/home/home.component';
import { PrincipalComponent } from './Component/principal/principal.component';
import { CreceComponent } from './Planeacion/crece/crece.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
    { path: 'crece', component:CreceComponent },
    { path: 'home', component:HomeComponent },
    { path: 'principal', component:PrincipalComponent},
    { path: 'usuarios', component:UsuariosComponent},
    { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


