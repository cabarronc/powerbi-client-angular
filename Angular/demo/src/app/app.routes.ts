import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreceComponent } from './Planeacion/crece/crece.component';


const routes: Routes = [
    { path: 'home', component:CreceComponent }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


