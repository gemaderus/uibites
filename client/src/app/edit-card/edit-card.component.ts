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
  formInfo = {
    title: '',
    description: '',
    url: '',
  };

  error: string;

  constructor(public dashboardService: DashboardService, public auth:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dashboardService.getEditCardByID(params['id'])
        .subscribe(card => this.card = card);
    })
  }

//   editCard(){
//     console.log(this.card);
//
//     this.dashboardService.editCard(this.card._id, this.formInfo)
//         .subscribe(card => this.card = card);
//         console.log(this.card);
//         this.router.navigate(['/'])
//   }
// }
//
//

editCard(){
    this.route.params.subscribe(params => {
      this.dashboardService.editCard(params['id'], this.formInfo)
      .subscribe(card => this.card = card);
        this.router.navigate(['/dashboard', 'card', params['id']])
    });


  // errorCb(err) {
  //   this.error = err;
  //   this.card = null;
  // }
  //
  // successCb(card) {
  //   this.card = card;
  //   this.error = null;
  // }

}
}
// addguest(plate){
//    console.log(this.plate.guests)
//    this.plateService.addGuest(this.plate._id, {guests: this.plate.guests + 1})
//        .subscribe(
//          plate => this.plate = plate
//        )
//    this.router.navigate(['/plates/' + this.plate.location])
//  }
