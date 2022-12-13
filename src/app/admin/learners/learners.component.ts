import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css']
})
export class LearnersComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
    this.service.getLearnerData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res;
      
    });
  }

}
