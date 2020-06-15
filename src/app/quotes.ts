export class Quotes {
    showDescription:boolean;
    constructor(
      public id:number, public name:string, public authors:string, public quotes:string,public date:Date, ){
      this.showDescription=false;

      }
  }
