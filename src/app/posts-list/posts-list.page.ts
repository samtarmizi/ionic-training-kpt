import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.page.html',
  styleUrls: ['./posts-list.page.scss'],
})
export class PostsListPage implements OnInit {

  response:any;
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.list()
  }

  list(){
    this.api.getPostsList().then( (data:any) =>{
      this.response = data;
    });
  }

}
