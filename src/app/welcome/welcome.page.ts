import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  latitude: any = 0;
  longitude: any = 0;
  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
  }

  getCurrentCoordinates(){
    this.geolocation.getCurrentPosition().then((data) => {
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
    });

    console.log(this.latitude);
    console.log(this.longitude);
  }

}
