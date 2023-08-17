import { ItemConstants } from "../constants/ItemConstants";
import { Item } from "./Item";

export class MonthEntry{

	beforeSalaryCredit: number;
	salaryCreditAmount: number;
	totalInSalaryAccountAfterCredit: number;
	afterExpenditures: number;
	totalCreditCardBillAmount: number
	items: Array<Item>;

	constructor(beforeSalaryCredit:number, salaryCreditAmount:number, items:Array<Item>){
		this.beforeSalaryCredit = beforeSalaryCredit;
		this.salaryCreditAmount = salaryCreditAmount;
		this.totalInSalaryAccountAfterCredit = beforeSalaryCredit + salaryCreditAmount;
		this.items = items;

		let expenditureAmount = items.filter((item) => item.transactionType == ItemConstants.TRANSACTION_TYPE_DEBIT)
									.reduce((sum, item) => sum+item.amount, 0);
		this.afterExpenditures = this.totalInSalaryAccountAfterCredit - expenditureAmount;

		this.totalCreditCardBillAmount = items.filter((item) => item.transactionCategory == ItemConstants.TRANSACTION_CREDIT_CARD_BILL)
											.reduce((sum, item) => sum+item.amount, 0);
	}
}