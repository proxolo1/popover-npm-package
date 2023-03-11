import { NgModule } from '@angular/core';
import { PopoverComponent } from './my-lib.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    PopoverComponent
  ],
  imports: [
    FontAwesomeModule,
    OverlayPanelModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    PopoverComponent
  ]
})
export class PopoverModule { }
