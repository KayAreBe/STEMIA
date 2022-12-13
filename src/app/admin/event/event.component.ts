import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();
  }

  //getdeleteid

  deleteID(id:any)
  {
    console.log(id,'deleteid==>');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = res.message;
      this.getAllData();

    });
  }

  getAllData()
  {
    this.service.getEventData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res;
      
     });
  }

}
