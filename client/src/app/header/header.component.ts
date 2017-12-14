import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  card;
  user;

  constructor(public authService: AuthService) {
    this.start();
  }

  ngOnInit() {
  }

  logout() {
    this.user = null;
    this.authService.logout();
  }

  start() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.authService.getUser()
        .subscribe(data => {
          this.user = data.user;
          console.log('[header component]', this.user);
        });
    }
  }
}
