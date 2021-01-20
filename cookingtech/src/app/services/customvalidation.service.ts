import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  constructor(private http: HttpClient) {}

  getData(url: string){
    return this.http.get(url);
  }

  postData(url: string, body:any){
    return this.http.post(url, body);
  }
  
}
