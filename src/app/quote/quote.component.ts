import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1,"Victor","Omore Cynthia","All that gliters is not gold.",new Date(14,6,2020)),
    new Quote(2,"Walter","Raila Amollo","It's aburd to uproot a tree planted during your fathers period and you be unable to uproot the one planted during your reign.",new Date(14,6,2020)),
    new Quote(3,"Kerovin","Patrick Ojwala","Wherever their is smoke their is fire.",new Date(14,6,2020))
  ];
  addNewQuotes(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm('You mean deleting')
      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

@Input() quoye: Quote;
  constructor() { }

   ngOnInit(): void {
   }

}
