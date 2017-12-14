import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router , ActivatedRoute} from '@angular/router';

interface Credentials {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formInfo:Credentials = {
    email: "",
    password: ""
  };

  constructor( public auth:AuthService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.router.navigate(['/']);
    }
  }

  login() {
    const {email, password} = this.formInfo;
    this.auth.login(this.formInfo)
    .subscribe((data) => {
      localStorage.setItem('auth_token', data.token);
      this.router.navigate(['/']);
    });
  }
}
