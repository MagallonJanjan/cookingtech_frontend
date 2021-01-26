import { Component, OnInit, Input } from '@angular/core';
import {ApiRequestService} from '../../../services/apirequest.service'
@Component({
  selector: 'app-viewrecipes',
  templateUrl: './viewrecipes.component.html',
  styleUrls: ['./viewrecipes.component.css']
})
export class ViewrecipesComponent implements OnInit {
  @Input() recipes:any; 
  
  constructor(private apiService:ApiRequestService) {
    console.log(this.recipes);
  }
  ngOnInit(): void {
  }

 getRecipe(){

 }
}
