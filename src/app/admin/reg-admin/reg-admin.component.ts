import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { ValidateService } from '../serv/validate.service';

@Component({
  selector: 'app-reg-admin',
  templateUrl: './reg-admin.component.html',
  styleUrls: ['./reg-admin.component.css']
})
export class RegAdminComponent implements OnInit {

  reactiveForm!: FormGroup;
  id:any = 4;

  registerForm!: FormGroup;
  errorList!: string[];
  modalMessage!: string;
  modalTitle!: string;
  isRegistrationInProcess: boolean = false;
  fullName!: FormControl;
  email!: FormControl;
  age!: FormControl;
  school!: FormControl;
  password!: FormControl;
  cpassword!:FormControl;


  constructor(private fb:FormBuilder, private validatorService : ValidateService) { }

  ngOnInit(): void {

    this.fullName = new FormControl('', [Validators.required,Validators.maxLength(25),Validators.minLength(5)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.age = new FormControl('', [Validators.required]);
    this.school = new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(5)]);
    this.password = new FormControl('', [Validators.required,Validators.maxLength(10),Validators.minLength(5)]);
    this.cpassword = new FormControl('', [Validators.required, this.validatorService.MustMatch(this.password)]);
    
    this.registerForm = this.fb.group({
      'fullName' : this.fullName,
      'email' : this.email,
      'age' : this.age,
      'school' : this.school,
      'password' : this.password,
      'cpassword' :this.cpassword
    })

    
    }
    
  registerSubmit(data:any){

    console.log(data);
    let dataToPass = {
      email:data.email,
      password:data.password,
      id:this.id++
    }

  }
}
