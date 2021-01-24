import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }
  
  apiRequest(url:string, method:string, body?: any) {
    let baseUrl = "http://cookingtech.herokuapp.com/api";
    let token = window.localStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}` 
    });

    url = `${baseUrl}${url}`;

    method = method.toUpperCase();
    console.log(method, body);
    
    if(method == "GET") {
      return this.http.request(method, url, {headers: headers});
    }

    return this.http.request(method, url, {body: body, headers: headers});
  }
}
