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

  constructor(public profileService:ProfileService,
  public auth:AuthService, public route:ActivatedRoute,
  public router:Router) {
    this.auth.getUser()
      .then(user => {
        console.log("[edit profile component] user:", user);
        this.user = user;
      });
  }

  ngOnInit() {
  }

  editUser(id, user){
    this.route.params.subscribe(params => {
      this.profileService.editUser(params['id'], this.user)
      .subscribe();
      this.router.navigate(['/user', params['id'], '/edit'])
    });
  }
}
