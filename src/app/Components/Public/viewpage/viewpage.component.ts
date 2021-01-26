import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiRequestService } from '../../../services/apirequest.service';

import { CookieService } from 'ngx-cookie-service';
import { EncryptService } from '../../../services/encrypt.service';
@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  id:any;
  category: any;
  cookie: any;

  isRecipes:any = true;
  recipes: any;
  showSideBar:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiRequestService,
    private cookies: CookieService,
    private dataEnc: EncryptService
  ) { }

  ngOnInit(): void {
    //get the cookies and possible encrypt it into data
    this.cookie = this.cookies.get('__cookingtech');

    //get the router parameters
    this.route.paramMap.subscribe(params=> {
      this.id = params.get('id');

    });

    this.route.paramMap.subscribe(params=> {
      this.category = params.get('cat');
    });

    if(!this.id && !this.category) {
      this.apiService.apiRequest('/recipes', "get").subscribe(respond => {
        this.recipes = respond||[];
        this.isRecipes = true;
        console.log(this.recipes);
        
      });
    }else if(this.id && !this.category) {
      this.apiService.apiRequest(`/recipes/${this.id}`, 'get').subscribe(respond => {
        this.recipes = respond;
        this.isRecipes = false;
        console.log("I was here");
        
        
      });
    }else if(this.category && !this.id) {
      this.apiService.apiRequest(`/recipes/category/${this.category}`, 'get').subscribe(respond => {
        this.recipes = respond || [];
        this.recipes = this.recipes.recipes;
        this.isRecipes = true;
        console.log(this.recipes);
        console.log("I was here too");

      });
    }
  }
  
  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
