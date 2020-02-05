import { Component } from '@angular/core';
import {CustomButtonComponent} from './custom-button/custom-button.component';
import {CustomComponent} from './custom/custom.component';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app8';
  gridOptions:any;
  gridApi :any;
  columnApi: any;
  columnFreeze: boolean = false;

  columnDefs = [
    {headerName: 'Make', field: 'make', cellRendererFramework:  CustomButtonComponent},
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'},
    {headerName: 'Model 2', field: 'model2' },
    {headerName: 'Price 2', field: 'price2'},
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000, model2: 'Celica', price2: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Honda', model: 'Boxter', price: 72000 }
  ];

  newRowData = [
    { make: 'Toyota New', model: 'Celica', price: 35000 },
    { make: 'Ford New', model: 'Mondeo', price: 32000 },
    { make: 'New', model: 'Boxter', price: 72000 }
];

  constructor(){
    this.gridOptions = {
      context: {
        componentParent: this
      },
      fullWidthCellRendererFramework: <{new(): CustomComponent}> (CustomComponent),
      isFullWidthCell: this.isFullWidthCell.bind(this)
    }
  }

  isFullWidthCell(rowNode) {
    return rowNode.data.make === 'Porsche';
  }

  onGridReady(event) {
    console.log(event);
    this.gridApi = event.api;
    this.columnApi = event.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  show() {
    this.gridApi.setRowData([]);
    this.gridApi.updateRowData({add: this.newRowData})
  }

  freeze() {
    this.columnFreeze = !this.columnFreeze;
    if (this.columnFreeze) {
      this.columnApi.setColumnPinned("model", 'left');
    } else {
      this.columnApi.setColumnPinned("model", null);
    }
   
  }
}
