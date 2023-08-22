import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-item-btn',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  @Input() title:string = "Add Button";
  @Input() bgColour:string = "green";
  @Input() textColour:string = "white";

  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
    console.log('Button Clicked: ',this.title);
  }
}
