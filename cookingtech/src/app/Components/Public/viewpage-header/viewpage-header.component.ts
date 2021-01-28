import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from '../../../services/apirequest.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewpage-header',
  templateUrl: './viewpage-header.component.html',
  styleUrls: ['./viewpage-header.component.css']
})
export class ViewpageHeaderComponent implements OnInit {

  constructor(
    private apiService : ApiRequestService
  ) { }
  
  recipes: any;
  cookie: any;
  ngOnInit(): void {
    this.cookie = window.localStorage.getItem('token');

    this.apiService.apiRequest('/recipes', "get")
        .subscribe((respond:any)=>{
          this.recipes = respond;
          console.log(this.recipes);
         
        })


  }
  values:any;
  name:any;

  onKey(item:any) {
        item = (item=="")?"~!$^*(*":item;
        
        item = item.toLowerCase();
        this.values = this.recipes.filter((recipe:any)=> {
          return recipe.name.toLowerCase().includes(item);
        });
        console.log(this.values); 
          
  }

}
