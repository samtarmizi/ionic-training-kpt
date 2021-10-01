import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.page.html',
  styleUrls: ['./photos-list.page.scss'],
})
export class PhotosListPage implements OnInit {

  response:any;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.api.getPhotosList().then( (data:any) => {
      console.log(data);
      this.response = data;
    });
  }

}
