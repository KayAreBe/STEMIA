import { Component,  ElementRef,  ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.css']
})
export class GuidelinesComponent  {

  constructor() { }

 @ViewChild('content', {static:false}) el!: ElementRef
 makePdf(){
  let pdf = new jsPDF('p','pt','a4')
  pdf.html(this.el.nativeElement,{
    callback: (pdf)=>
    //save the document
    pdf.save("guidelines.pdf")
  })
 }
}
