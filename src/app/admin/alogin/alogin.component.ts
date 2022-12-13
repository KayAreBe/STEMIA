import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class LoginComponent implements OnInit {
  
  alogin!: FormGroup;
  users:any = [];

  private formSubmitAttempt!: boolean;

  email!: FormControl;
  password!: FormControl;

  LoginStatus$ = new BehaviorSubject<boolean>(false);

  constructor(
    private fb:FormBuilder,
    private router:Router, 
    private route: ActivatedRoute,
    private authService: AuthenticateService,
    private commserv:AuthenticateService) { }

  ngOnInit(): void {

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required,Validators.maxLength(10),Validators.minLength(5)]);

    this.alogin = this.fb.group({
      'email' : this.email,
      'password' : this.password
    })

  }
  loginSubmit(data:any){
    console.log(data);
  }
  onSubmit() {
    if (this.alogin.valid) {
      this.authService.login(this.alogin.value);
    }
    this.formSubmitAttempt = true;
  }

}
