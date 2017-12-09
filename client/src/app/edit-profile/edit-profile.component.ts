import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user;
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/profile/{id}`
  });

  formUser = {
    name: '',
    username: '',
    email: '',
    bio: '',
  };

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

  editUser(id, user){
      this.route.params.subscribe(params => {
        this.profileService.editUser(params['id'], this.formUser)
        .subscribe(user => this.user = user);
        this.router.navigate(['/profile', params['id']])
      });
    }

  // deleteUser(){
  //   this.profileService.deleteUser().subscribe(() =>{
  //     this.router.navigate(['/']);
  //   });
  }

  // submitForm(myForm) {
  //   console.log(myForm);
  // }


  // updateUser(){
  // this.profileService.updateUser().subscribe(() =>{
  //   this.router.navigate(['/profile/:id']);
  // });
