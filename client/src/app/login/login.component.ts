// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
//

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router , ActivatedRoute} from '@angular/router';

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  constructor(public auth:AuthService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .subscribe(user => console.log(user))
      this.router.navigate(['/']);

    } else{
      console.log("You must set a username and a password");
    }
  }

}
