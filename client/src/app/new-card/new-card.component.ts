import { Component, OnInit } from '@angular/core';
import { CardsService } from "../../services/cards.service";
import { FileUploader } from "ng2-file-upload";
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BASE_DOMAIN, BASE_URL} from '../helpers';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${BASE_URL}/dashboard/cards`,
    authToken: localStorage.getItem('auth_token')
  });

  newCard = {
    title: '',
    description: '',
    url: '',
    file: '',
    tags: ''
  };


  constructor(public cardsService: CardsService, public auth:AuthService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', this.newCard.title);
      form.append('description', this.newCard.description);
      form.append('url', this.newCard.url);
      form.append('tags', this.newCard.tags);
    };

    this.uploader.onCompleteItem = (item:any, response:any, status:any ) => {
      const card = JSON.parse(response);
      this.router.navigate(['/card', card._id]);
    }

    this.uploader.uploadAll();
  }
}
