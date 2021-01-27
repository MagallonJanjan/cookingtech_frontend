import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  constructor(private http: HttpClient) { }



  // getData(url: string) {
  //   let token = window.localStorage.getItem('token');
  //   let headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });
  //   return this.http.get(url, { headers: headers });
  // }

  // postData(url: string, body: any) {
  //   let token = window.localStorage.getItem('token');
  //   let headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });
  //   return this.http.post(url, body, { headers: headers });
  // }

  // updateData(url: string, body:any) {
  //   return this.http.put(url, body);
  // }

  
  apiRequest(url:string, method:string, body?: any) {
    let token = window.localStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}` 
    });

    method = method.toUpperCase();
    console.log(method, body);
    
    if(method == "GET") {
      return this.http.request(method, url, {headers: headers});
    }

    return this.http.request(method, url, {body: body, headers: headers});
  }

  


}
