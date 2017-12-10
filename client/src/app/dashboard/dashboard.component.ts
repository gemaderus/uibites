import { Component, OnInit } from '@angular/core';
import { CardsService } from "../../services/cards.service";
// import { Router } from '@angular/router';
// import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cards:any = [];

  constructor(public cardsService: CardsService) {
  }

  ngOnInit() {
    this.cardsService.getList()
    .map(dashboard => {this.cards = dashboard; console.log(this.cards);})
    .subscribe();

  }
}
