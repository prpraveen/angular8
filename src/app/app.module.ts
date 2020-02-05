import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';
import { MysliderComponent } from './myslider/myslider.component';
import {MatButtonModule} from '@angular/material/button';
import { MyGridComponent } from './my-grid/my-grid.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    MysliderComponent,
    MyGridComponent,
    CustomButtonComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [CustomButtonComponent, CustomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
