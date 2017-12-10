import { Component, OnInit } from '@angular/core';
import { CardsService } from "../../services/cards.service";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/dashboard/new-card`
  });

  newCard = {
    title: '',
    description: '',
    url: '',
    photo: ''
  };


  constructor() { }

  ngOnInit() {
  }


  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', this.newCard.title);
      form.append('description', this.newCard.description);
      form.append('url', this.newCard.url);
    };

    this.uploader.uploadAll();
  }

}
