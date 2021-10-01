import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: any;
  email:any;
  token: any;
  constructor(public storage:Storage) {
    this.storage.create(); // new step

    this.getName();
    this.getEmail();
    this.getToken();
  }

  async getName(){

    const name = await this.storage.get('name').then((data:any) => {
      return data;
    });
    this.name = name;
  }

  async getEmail(){

    const email = await this.storage.get('email').then((data:any) => {
      return data;
    });
    this.email = email;
  }

  async getToken(){

    const token = await this.storage.get('token').then((data:any) => {
      return data;
    });
    this.token = token;
  }
}
