import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiRequestService } from '../../../services/apirequest.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  id:any;
  category: any;

  isRecipes:any = true;
  recipes: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiRequestService
  ) { }
  showSideBar:boolean = true;
  ngOnInit(): void {
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
      });
    }else if(this.id) {
      this.apiService.apiRequest(`/recipes/${this.id}`, 'get').subscribe(respond => {
        this.recipes = respond;
        this.isRecipes = false;
        console.log(this.recipes);
        
      });
    }else if(this.category) {
      this.apiService.apiRequest(`/recipes/category/${this.category}`, 'get').subscribe(respond => {
        this.recipes = respond || [];
        this.recipes = this.recipes.recipes;
        this.isRecipes = true;
      });
    }
  }
  
  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
