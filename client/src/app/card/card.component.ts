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
  comentarios:Array<any> = [];
  comment = {
    body: ''
  };

  constructor(public cardsService: CardsService, public authService:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        this.authService.getUser()
          .subscribe(user => {
            this.user = user;
          });
      }

      this.cardsService.getCardByID(params['id'])
        .subscribe(data => {
          this.card = data.card;
          this.comentarios = data.comments;

          console.log(data.card);
        });
    })
  }

  deleteCard (id) {
    this.cardsService.deleteCard(id).subscribe(() =>{
      this.router.navigate(['/cards']);
    });
  }

  saveComment (id, comment) {
    this.comentarios.push({
      text : comment,
      author: {
        name: this.user.name,
        photo: this.user.photo
      }
    });
    
    this.cardsService.saveComment(id, comment).subscribe(() => {
      this.comment.body = '';
    });
  }

  addLike (id) {
    this.cardsService.doLike(id).subscribe(() => {
      this.card.likes++;
    });
  }
}
