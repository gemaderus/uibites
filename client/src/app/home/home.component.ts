import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards:any = [];
  constructor(public dashboardService: DashboardService) {
    this.start()
  }

  ngOnInit() {
  }

  start() {
    this.dashboardService.getList()
    .subscribe(dashboard => {this.cards = dashboard; console.log(this.cards);});
  }
}
