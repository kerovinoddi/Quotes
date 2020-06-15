export class Quotes {
	showDescription:boolean;
	constructor(
		public id:number, public name:string, public author:string, public quotes:string, pubblic date:Date, ){
		this.showDescription=false;
	}
}
