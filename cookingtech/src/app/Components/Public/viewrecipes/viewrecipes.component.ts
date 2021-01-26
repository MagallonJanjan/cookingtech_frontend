import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from '../../../services/apirequest.service'
@Component({
  selector: 'app-viewrecipes',
  templateUrl: './viewrecipes.component.html',
  styleUrls: ['./viewrecipes.component.css']
})
export class ViewrecipesComponent implements OnInit {

recipes:any;
  constructor(private apiService:ApiRequestService) { 
    this.apiService.apiRequest('/recipes',"get",)
      .subscribe(respond =>{
        this.recipes=respond;
        console.log(this.recipes);
      })
  }

  ngOnInit(): void {
  }

 getRecipe(){

 }
}
