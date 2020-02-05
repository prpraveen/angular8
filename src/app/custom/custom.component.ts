import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }

  ngOnInit() {
  }

  agInit(params) {

  }

  refresh(params) {
    return params;
  }

  
}
