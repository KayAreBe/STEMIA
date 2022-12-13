import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string="";
  names:Array<string> = new Array<string>();

  phone:string="";
  phones:Array<string> = new Array<string>();

  email:string=""
  emails:Array<string> = new Array<string>();

  sub:string=""
  subs:Array<string> = new Array<string>();

  mas:string=""
  mass:Array<string> = new Array<string>();

  CallSomelogic(){
    this.names.push(this.name);
    this.name="";

    this.phones.push(this.phone);
    this.phone="";

    this.emails.push(this.email);
    this.email="";

    this.subs.push(this.sub);
    this.sub="";

    this.mass.push(this.mas);
    this.mas="";

  }

}
 