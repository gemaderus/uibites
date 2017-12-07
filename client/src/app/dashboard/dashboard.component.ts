import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
// import { Router } from '@angular/router';
// import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cards:any = [];

  constructor(public dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getList()
    .map(dashboard => {this.cards = dashboard; console.log(this.cards);})
    .subscribe();

  }
}
