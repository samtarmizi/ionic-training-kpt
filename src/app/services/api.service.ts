import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPhotosList(){
    let url = "https://jsonplaceholder.typicode.com/photos";

    return new Promise((resolve, reject) =>{
      this.http.get(url).subscribe((response) => {
        resolve(response);
      }, error =>{
        reject(error);
      })
    });
  }

  getPostsList(){
    let url = "https://jsonplaceholder.typicode.com/posts";

    return new Promise((resolve, reject) =>{
      this.http.get(url).subscribe((response) => {
        resolve(response);
      }, error =>{
        reject(error);
      })
    });
  }

  postLogin(request: any){
    let url = "https://api.staging.tarsoft.co/api/login";

    var body = new FormData();
    body.append('email', request.email);
    body.append('password', request.password);

    return new Promise((resolve, reject) =>{
      this.http.post(url,body).subscribe((response) => {
        resolve(response);
      }, error =>{
        reject(error);
      })
    });
  }
}
