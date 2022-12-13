import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('eventId');
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
    });
  }

  eventForm = new FormGroup({
    'eventName':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required)
  });

  eventSubmit()
  {
    if(this.eventForm.valid)
    {
      console.log(this.eventForm.value);
      this.service.createData(this.eventForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.eventForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg="all fields are required!!";
    }
  }

  eventUpdate()
  {

  }
}
