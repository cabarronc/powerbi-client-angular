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


@NgModule({
  declarations: [AppComponent, 
    SideBarComponent, 
    HomeComponent, CreceComponent, ProgramasPresupuestariosComponent, 
    ],
    
  imports: [BrowserModule, 
    HttpClientModule, 
    PowerBIEmbedModule,
    SidebarModule.forRoot(),
    BrowserModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
