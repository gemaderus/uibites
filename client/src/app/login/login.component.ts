import { Component, OnInit } from '@angular/core';

// interface LoginForm{
//   username:string;
//   password:string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // formInfo: LoginForm = {
  //   username: '',
  //   password: ''
  // };
  constructor() { }

  ngOnInit() {
  }
}
