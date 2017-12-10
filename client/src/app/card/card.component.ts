import { Component, OnInit } from '@angular/core';
import { CardsService } from "../../services/cards.service";
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  user;
  card;
  comment = {
    body: ''
  };

  constructor(public cardsService: CardsService, public authService:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        this.authService.getUser()
          .then(user => {
            this.user = user;
          });
      }

      this.cardsService.getCardByID(params['id'])
        .subscribe(card => this.card = card);
    })
  }

  deleteCard (id) {
    this.cardsService.deleteCard(id).subscribe(() =>{
      this.router.navigate(['/cards']);
    });
  }

  saveComment (id, comment) {
    this.cardsService.saveComment(id, comment).subscribe(() => {
      this.comment.body = '';
      this.router.navigate(['/card', id]);
    });
  }

  addLike (id) {
    this.cardsService.doLike(id).subscribe(() => {
      this.card.likes++;
    });
  }
}
