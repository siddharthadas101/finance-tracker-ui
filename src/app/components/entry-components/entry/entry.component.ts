import { Component, Input, Output } from '@angular/core';
import { EntryItemComponent } from '../entry-item/entry-item.component';

@Component({
  selector: 'entry-form',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {

  month:number = 0;	
  year:number = 0;
	beforeSalaryCredit:number = 0;
	salaryCreditAmount:number = 0;

	totalInSalaryAccountAfterCredit:number = 0;
	projectedAfterExpenditures:number = 0;
	totalCreditCardBillAmount:number = 0;

  expenseItems:EntryItemComponent[] = [];

  currentYear:number = new Date().getFullYear();
  yearRange:number[] = [];
  months:any[] = [];
  monthNames:string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  constructor(){
    this.generateMonthRange();
    this.generateYearRange();
  }

  saveDetails(){
    console.log("values: ", this.month, this.year, this.beforeSalaryCredit, this.salaryCreditAmount);
  }

  generateYearRange(){
    for(let i = this.currentYear-4; i<=this.currentYear; i++)
      this.yearRange.push(i);
  }

  generateMonthRange(){
    for(let i = 0; i<12; i++){
      this.months.push({displayText: this.monthNames[i], value: i+1})
    }
  }

  updateTotalInSalaryAccountAfterCredit(){
    this.totalInSalaryAccountAfterCredit = this.beforeSalaryCredit + this.salaryCreditAmount;
  }

  appendEntryItem(){
    let expenseItem:EntryItemComponent = new EntryItemComponent();
    this.expenseItems.push(expenseItem);
    console.log(this.expenseItems);
  }
}
