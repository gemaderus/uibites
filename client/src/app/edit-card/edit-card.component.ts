import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  card;

  constructor(public dashboardService: DashboardService, public auth:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dashboardService.getEditCardByID(params['id'])
        .subscribe(card => this.card = card);
    })
  }

}
