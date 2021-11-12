import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { PrincipalComponent } from './Component/principal/principal.component';
import { CreceComponent } from './Planeacion/crece/crece.component';


const routes: Routes = [
    { path: 'crece', component:CreceComponent },
    { path: 'home', component:HomeComponent },
    { path: 'principal', component:PrincipalComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


