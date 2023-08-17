import { ItemConstants } from "../constants/ItemConstants";

export class Item {
	subject: string;
	amount: number;
	transferredTo: string;
	transactionDone: boolean;
	transactionType: number; // -1 >> debit | +1 >> credit
	transactionCategory: string;
	userComment: string;

	constructor(subject:string, amount: number, transferredTo:string, 
		transactionType:number, transactionCategory:string, userComment:string){
		this.subject = subject;
		this.amount = amount;
		this.transferredTo = transferredTo;
		this.transactionDone = false;
		this.transactionType = transactionType;
		this.transactionCategory = transactionCategory;
		this.userComment = userComment;
	}
}