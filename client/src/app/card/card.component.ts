import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card;

  constructor(public dashboardService: DashboardService, public auth:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {

  }

  deleteCard(id){
  this.dashboardService.deleteCard(id).subscribe(() =>{
    this.router.navigate(['/dashboard/mydashboard']);
  });
  }
}
