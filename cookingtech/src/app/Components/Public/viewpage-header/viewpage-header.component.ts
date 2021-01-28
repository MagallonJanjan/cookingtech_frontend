import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../../services/apirequest.service';

@Component({
  selector: 'app-viewpage-header',
  templateUrl: './viewpage-header.component.html',
  styleUrls: ['./viewpage-header.component.css']
})
export class ViewpageHeaderComponent implements OnInit {

  constructor(
    private apiService: ApiRequestService
  ) { }

  recipes: any;
  cookie: any;
  ngOnInit(): void {
    this.cookie = window.localStorage.getItem('token');
    this.apiService.apiRequest('/recipes', 'get')
      .subscribe((respond:any)=> {
        this.recipes = respond;
      });
  }
}
