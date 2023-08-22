import { Component } from '@angular/core';
import layoutData from "../../../data/grid-layout.json"

@Component({
  selector: 'basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.css']
})
export default class BasicGridComponent {
  ngOnOnit():void{
    // this.layout = layoutData.grid.columns;
    console.log("printing layout from grid ngOnInit: ",this.layout)
  }
  constructor(){
    this.layout = layoutData.grid.columns;
    console.log("printing layout from grid constructor: ",this.layout);
  }
  layout:Object = "";
}
