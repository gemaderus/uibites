import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:SessionService, private router: Router) { }

  ngOnInit() {
  }

  signup(username, password){
    this.auth.signup(username,password).subscribe();
    this.router.navigate(['/mydashboard']);
  }

  submitForm(signupForm) {
    console.log(signupForm);
  }
}
