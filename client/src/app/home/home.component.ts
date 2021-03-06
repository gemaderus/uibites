import { Component, OnInit,  } from '@angular/core';
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
  cuoreClass = false;

  cards;
  user;
  constructor(public cardsService: CardsService, public authService: AuthService) {

  }

  ngOnInit() {
    this.start();
  }

  start() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.authService.getUser()
        .subscribe(data => {
          this.user = data.user;
        });

      this.cardsService.getList()
      .subscribe(cards => {
        this.cards = cards;
        console.log(this.cards);
      });
    } else {
      console.log("no hay token");
    }
  }

  addLike (id) {
    this.cardsService.doLike(id)
      .subscribe(res => {
        let card = this.cards.filter(e => e._id == res._id);
        this.cuoreClass = true;
        card[0].likes++;
    });
  }
}
