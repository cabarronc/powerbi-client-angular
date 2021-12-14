// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { HomeComponent } from './Component/home/home.component';
import { SidebarModule } from 'ng-sidebar';
import { CreceComponent } from './Planeacion/crece/crece.component';
import { ProgramasPresupuestariosComponent } from './Planeacion/programas-presupuestarios/programas-presupuestarios.component';
import { AppRoutingModule } from './app.routes';
import { PrincipalComponent } from './Component/principal/principal.component';
import { UsuariosComponent } from './Administracion/Usuarios/usuarios/usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ AppComponent,
    SideBarComponent, 
    HomeComponent,
     CreceComponent, 
     ProgramasPresupuestariosComponent, 
     PrincipalComponent, 
     UsuariosComponent
    ],
    
  imports: [BrowserModule, 
    HttpClientModule, 
    PowerBIEmbedModule,
    SidebarModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
