// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
//
// export class LoginComponent{
//
//
//   constructor(private auth:AuthService, private router: Router) {
//   }
//
//   login(username, password){
//     this.auth.login(username,password).subscribe();
//     // this.router.navigate(['dashboard', 'mydashboard']);
//   }
//
//   submitForm(myForm) {
//     console.log(myForm);
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

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

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .subscribe(user => console.log(user))

    } else{
      console.log("You must set a username and a password");
    }
  }

}
