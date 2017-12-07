import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent implements OnInit {

  cards:any = [];
  user;

  constructor(public dashboardService: DashboardService, public auth:AuthService, public route:ActivatedRoute, public router:Router) {

  }


  ngOnInit() {
    this.auth.isLoggedIn().subscribe(user=>{
      this.user=user
      console.log(this.user)
        this.dashboardService.getListCardUser()
            .subscribe(userDashboard => {this.cards = userDashboard})
    })
  }

    // deleteCard(id){
    // this.dashboardService.deleteCard(id).subscribe(() =>{
    //   this.router.navigate(['/dashboard/mydashboard']);
    // });
  // }

}
