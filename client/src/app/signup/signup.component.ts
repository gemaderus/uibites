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

  constructor(public auth:AuthService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  }

  signup(username, password){
    console.log('entro en signup del componente')
    console.log(username, password)
    this.auth.signup(username,password).subscribe();
    this.router.navigate(['/']);
  }

}
