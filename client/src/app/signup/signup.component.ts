import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formInfo = {
    username: '',
    name: '',
    email: '',
    password: '',
    bio: ''
  };


  constructor(public auth:AuthService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.router.navigate(['']);
    }
  }

  signup(){
    console.log('entro en signup del componente')
    console.log(this.formInfo);
    this.auth.signup(this.formInfo).subscribe(
      (user) => {
      localStorage.setItem('auth_token', user.token);
      this.router.navigate(['']);
    });
  }

}
