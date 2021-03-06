import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  request:any;
  response: any;
  constructor(public api: ApiService, public router: Router, public storage:Storage) {
    this.request = {
      email : null,
      password : null
    }
   }

  async ngOnInit() {
    await this.storage.create();
  }

  login(){
    console.log('login is clicked');
    console.log(this.request)

    this.api.postLogin(this.request).then( (data:any) =>{
      console.log(data);
      this.response = data;

      alert(this.response.message)

      if(this.response.sucess){
        this.storage.set('name', this.response.data.name)
        this.storage.set('email', this.response.data.email)
        this.storage.set('token', this.response.token)

        this.router.navigate(['/home']);
      }
    });
  }
}
