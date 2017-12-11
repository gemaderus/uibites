import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  card;

  constructor(public authService: AuthService) {
    // this.start();
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  // start() {
  //   const token = localStorage.getItem('auth_token');
  //   if (token) {
  //     this.authService.getUser()
  //       .then(user => {
  //         this.user = user;
  //       });
  //   }
  // }


}
