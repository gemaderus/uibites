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
  constructor(public auth: AuthService) {

  }

  ngOnInit() {
  //   this.user = this.auth.getUser();
  //   this.auth.getLoginEventEmitter()
  //     .subscribe(user => this.user = user);
  // }
  //
  // logout() {
  //   this.auth.logout().subscribe();
  // }
}

}
