import { Component } from '@angular/core';

@Component({
  selector: 'entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent {
  ngOnInit():void{
    this.transactionDone = false;
  }

  subject!: string;
	amount!: number;
	transferredTo!: string;
	transactionDone!: boolean;
	transactionType!: number; // -1 >> debit | +1 >> credit
	transactionCategory!: string;
	userComment!: string;

  
}
