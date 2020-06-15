import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 @Output() emitquote= new EventEmitter();

 newQuote=new Quotes(0,'','','',new Date());;
 

 submitQuotes(){
   this.emitquote.emit(this.newQuote);
  
 }
  constructor() { }

  ngOnInit() {
  }

}
