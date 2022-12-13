import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;

  constructor( private authServ: AuthenticateService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authServ.isLoggedIn;
  }

  onLogout() {
    this.authServ.logout();
  }

}
