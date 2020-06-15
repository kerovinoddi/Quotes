import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,"Kerovin","Peter Logras","Whatever we expect with confidence becomes our own self-fulfilling prophecy.",new Date(2018,6,4)),
    new Quotes(2,"Njero","Isaac Asimov","A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",new Date(2018,6,4)),
    new Quotes(3,"MaryAnn","Richard Bach","You teach best what you most need to learn",new Date(2018,6,4)),
    new Quotes(4, "Melisa","Zig Ziglar","Your attitude, not your aptitude, will determine your altitude.",new Date(2018,6,4))


  ];
  addNewQuotes(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription 
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm('Are you sure');

      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  

  constructor() { }

  ngOnInit() {
  }

}
