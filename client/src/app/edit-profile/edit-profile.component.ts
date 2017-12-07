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

  constructor(public profileService:ProfileService,
  public auth:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
  }

  deleteUser(){
  this.profileService.deleteUser().subscribe(() =>{
    this.router.navigate(['/']);
  });

  // updateUser(){
  // this.profileService.updateUser().subscribe(() =>{
  //   this.router.navigate(['/profile/:id']);
  // });
}

}
