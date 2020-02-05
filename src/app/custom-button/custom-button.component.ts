import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  params;

  constructor() { }

  agInit(params) {
    this.params = params;
  }

  ngOnInit() {
  }
  
  showData() {
    console.log(this.params);
    this.params.context.componentParent.show();
  }

}
