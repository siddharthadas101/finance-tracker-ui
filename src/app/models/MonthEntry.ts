import MonthEntryItem from "./MonthEntryItem";

export class MonthEntry{

	month:number;
	year:number;
	beforeSalaryCredit: number;
	salaryCreditAmount: number;
	totalInSalaryAccountAfterCredit: number;
	projectedAfterExpenditures: number;
	totalCreditCardBillAmount: number;
	items: Array<MonthEntryItem>;

	constructor(month:number, year:number, 
		beforeSalaryCredit:number, 
		salaryCreditAmount:number, 
		totalInSalaryAccountAfterCredit: number,
		projectedAfterExpenditures: number,
		totalCreditCardBillAmount: number,
		items:Array<MonthEntryItem>){

		this.month = month;
		this.year = year;
		this.beforeSalaryCredit = beforeSalaryCredit;
		this.salaryCreditAmount = salaryCreditAmount;
		this.totalInSalaryAccountAfterCredit = totalInSalaryAccountAfterCredit;
		this.projectedAfterExpenditures = projectedAfterExpenditures;
		this.totalCreditCardBillAmount = totalCreditCardBillAmount;
		this.items = items;

		// let expenditureAmount = items.filter((item) => item.transactionType == ItemConstants.TRANSACTION_TYPE_DEBIT)
		// 							.reduce((sum, item) => sum+item.amount, 0);
		// this.projectedAfterExpenditures = this.totalInSalaryAccountAfterCredit - expenditureAmount;

		// this.totalCreditCardBillAmount = items.filter((item) => item.transactionCategory == ItemConstants.TRANSACTION_CREDIT_CARD_BILL)
		// 									.reduce((sum, item) => sum+item.amount, 0);
	}
}