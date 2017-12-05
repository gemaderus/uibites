import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{


  constructor(private auth:SessionService, private router: Router) {
  }

  login(username, password){
    this.auth.login(username,password).subscribe();
    this.router.navigate(['/mydashboard']);
  }

  submitForm(myForm) {
    console.log(myForm);
  }

}
