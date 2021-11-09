// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, PowerBIEmbedModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
