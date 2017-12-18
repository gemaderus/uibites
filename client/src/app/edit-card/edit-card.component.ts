import { Component, OnInit } from '@angular/core';
import { CardsService } from "../../services/cards.service";
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  card;

  constructor(public cardsService: CardsService, public auth:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cardsService.getCardByID(params['id'])
        .subscribe(data => this.card = data.card);
    });
  }

  editCard() {
    const id = this.card._id;
    const data = {
      ...this.card,
      tags: Array.isArray(this.card.tags) ? this.card.tags : this.card.tags.split(',').map((tag) => tag.trim())
    }

    this.cardsService.editCard(id, data)
    .subscribe(card => {
      this.router.navigate(['/card', id])
    });
  }
}
