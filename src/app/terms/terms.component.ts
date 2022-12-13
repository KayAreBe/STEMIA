import { Component, OnInit } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
// import { formatDate, getLocaleDayNames } from '@angular/common';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private http:HttpClientModule) { }
  name:String = '';
  file:any;
  getName(name: String){
    this.name = name;
   }
   getFile(event: any){
    this.file = event.target.file[0]
    console.log('file',this.file)
   }

   submitData(){
    // let formData = new FormData();
    // // formData.set("name",this.name)
    // formData.set("file",this.file)

    // this.http
    // .post('http://localhost:3001/upload/uploadFiles',formData)
    // .subscribe((_response: any)=>{});
   }
 

  ngOnInit(): void {}

}
