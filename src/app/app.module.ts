import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PopoverModule} from 'dist/my-lib'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PopoverModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
