import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user;
  
  constructor(public profileService:ProfileService,
  public auth:AuthService, public route:ActivatedRoute,
  public router:Router) {
    this.route.params.subscribe(params => {
      this.profileService.getUserDetail(params['id'])
        .subscribe(user => this.user = user);
    })
  }



  ngOnInit() {
  }

  deleteUser(){
    this.profileService.deleteUser().subscribe(() =>{
      this.router.navigate(['/']);
    });
  }

  submitForm(myForm) {
    console.log(myForm);
  }


  // updateUser(){
  // this.profileService.updateUser().subscribe(() =>{
  //   this.router.navigate(['/profile/:id']);
  // });


}
