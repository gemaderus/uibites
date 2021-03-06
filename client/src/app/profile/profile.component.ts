import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import { CardsService } from '../../services/cards.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  cards:any = [];
  comments;

  constructor(
    public router:Router,
    public profileService:ProfileService,
    public auth:AuthService,
    public cardsService:CardsService,
    public route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.profileService.getUserDetail(params['id'])
        .subscribe(user => this.user = user);
    })

    this.cardsService.getList()
    .subscribe(cards => {
      this.cards = cards;
      console.log(this.cards);
    });
  }

  addLike (id) {
    this.cardsService.doLike(id)
      .subscribe(res => {
        let card = this.cards.filter(e => e._id == res._id);
        card[0].likes++
    });
  }

  // counterComments() {
  //   this.cardsService.saveComment()
  //   subscribe(res => {
  //
  //   });
  // }

}
