import { Component, Input, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import {faCircleInfo}  from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'popover',
  template: `
    <ng-container *ngIf="buttonStyle == 'icon'">
    <fa-icon class="close" [icon]="faCircleInfo" (mousedown)="onMouseDown($event)"></fa-icon>
  <p-overlayPanel #panel>
    <div class="container-fluid">
      <div class="row title py-1">
        <div class="col-8">
          <span class="text-start">{{ title }}</span>
        </div>
        <div class="col-4 text-end" (click)="panel.hide()">
        <fa-icon [icon]="faXmark" class="close"></fa-icon>
        </div>
      </div>

      <div class="row m-2" *ngIf="type == 'text'">
        <span>{{ body }}</span>
      </div>
      <div class="row m-2" *ngIf="type == 'html'" [innerHTML]="body"></div>
    </div>
  </p-overlayPanel>
</ng-container>

<ng-container class="close" *ngIf="buttonStyle == 'label'">
  <div id="pop-over-box" >
    <span class="btn btn-sm close" (mousedown)="onMouseDown($event)">
      {{ title }}
    </span>
    <p-overlayPanel #panel>
      <div class="container-fluid">
        <div class="row title py-1">
          <div class="col-8">
            <span class="text-start">{{ title }}</span>
          </div>
          <div class="col-4 text-end" (click)="panel.hide()"> 
          <fa-icon [icon]="faXmark"></fa-icon>
          </div>
        </div>
        <div class="row m-2" *ngIf="type == 'text'">
          <span>{{ body }}</span>
        </div>
        <div class="row m-2" *ngIf="type == 'html'" [innerHTML]="body"></div>
      </div>
    </p-overlayPanel>
  </div>
</ng-container>
  `,
  styles: [
        `
    .title span {
      font-weight: bold;
      margin: 2px 0px;
    }
    .title {
      background-color: #ebebeb;
      font-size: larger;
    }
    .close {
      cursor: pointer;
      font-size: large;
    }
    svg{
      cursor:pointer;
    }
    
    `
  ]
})
export class PopoverComponent {
  @Input() buttonStyle: any;
  @Input() title: any;
  @Input() type: any;
  @Input() body: any;
  @ViewChild('panel')
  overlayPanel!: OverlayPanel;
  faCircleInfo=faCircleInfo;
  faXmark=faXmark;
  onMouseDown(event: Event) {
    this.overlayPanel.show(event);
  }
}
