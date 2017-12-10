import { Component, OnInit } from '@angular/core';
import { CardsService } from "../../services/cards.service";
import { AuthService } from "../../services/auth.service";

// 1. Miro si hay tocken
// 2. Si hay token, pinto component Home
// 3. Si no hay token, pinto componente Landing

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards:any = [];
  user;
  constructor(public cardsService: CardsService, public authService: AuthService) {
    this.start()
  }

  ngOnInit() {
  }

  start() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.authService.getUser()
        .then(user => {
          this.user = user;
        });

      this.cardsService.getList()
      .subscribe(cards => {
        this.cards = cards;
        console.log(this.cards);
      });
    }
  }
}
