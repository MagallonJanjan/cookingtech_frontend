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
  bookmarks: any;
  myRecipes: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiRequestService,
    private cookies: CookieService,
    private dataEnc: EncryptService
  ) { }

  user:any;
  ngOnInit(): void {
    //get the cookies and possible encrypt it into data
    this.cookie = window.localStorage.getItem('__cookingtech');
    
    if(this.cookie) {
      this.user = this.dataEnc.decrypt(this.cookie).user;
    }
    //get the router parameters
    this.route.paramMap.subscribe(params=> {
      this.id = params.get('id');
      this.category = params.get('cat');
      this.bookmarks = params.get('bookmarks');
      this.myRecipes = params.get('my-recipes');
      
    });

    //chect the parameters of the url
    if(this.bookmarks){
      this.apiService.apiRequest(`/user/bookmarks/${this.user.id}`, "get")
        .subscribe((respond:any) => {
          this.recipes = respond.user_bookmarks[0].bookmarks;
          this.isRecipes = true;
          this.category = "My Bookmarks";
          console.log(this.recipes);
          
          return;
        });
    }

    if(this.myRecipes) {
      this.apiService.apiRequest(`/user/my-recipes/${this.user.id}`, "get")
        .subscribe((respond:any)=> {
          this.recipes =  respond.user[0].recipes;
          this.isRecipes = true;
          this.category = "My Recipes";
          return;
        } );
    }

    if(!this.id && !this.category && !this.myRecipes && !this.bookmarks) {
      this.apiService.apiRequest('/recipes', "get").subscribe(respond => {
        this.recipes = respond||[];
        this.isRecipes = true;
        console.log(this.recipes);
        this.category = "All";
        return;
      });

    }
    if(this.id && !this.category && !this.myRecipes && !this.bookmarks) {
      this.apiService.apiRequest(`/recipes/${this.id}`, 'get').subscribe(respond => {
        this.recipes = respond;
        this.isRecipes = false;
        console.log("I was here");
        return;
      });

    }if(this.category && !this.id && !this.bookmarks && !this.myRecipes) {
      this.apiService.apiRequest(`/recipes/category/${this.category}`, 'get').subscribe(respond => {
        this.recipes = respond || [];
        this.recipes = this.recipes.recipes;
        this.isRecipes = true;
        console.log(this.recipes);
        console.log("I was here too");
        return;
      });
    }
  }
  
  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
