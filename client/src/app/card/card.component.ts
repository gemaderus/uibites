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
  // comments: Object[];
  // newComments: Object = {};
  //newComment: Object = {};
  newLikes = {
    likes: 0
}

  constructor(public dashboardService: DashboardService, public auth:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dashboardService.getEditCardByID(params['id'])
        .subscribe(card => this.card = card);
    })
  }

  deleteCard(id){
    this.dashboardService.deleteCard(id).subscribe(() =>{
    this.router.navigate(['/dashboard', '/mydashboard']);
  });
}

likeAdd($scope) {
  $scope.newLikes = this.newLikes;
  $scope.incrementLikes = function(count){
    count.likes++;
  }
  //document.getElementById("like").innerHTML(count);
}
  // addComments(){
  //   console.log("Add contact has been called");
  //   this.comments.push(this.newComments);
  //   this.newComments = {}
  // };
}
