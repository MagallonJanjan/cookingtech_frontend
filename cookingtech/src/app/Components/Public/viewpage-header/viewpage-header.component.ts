import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ApiRequestService} from '../../../services/apirequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpage-header',
  templateUrl: './viewpage-header.component.html',
  styleUrls: ['./viewpage-header.component.css']
})
export class ViewpageHeaderComponent implements OnInit {
  @Output() navBarToggle = new EventEmitter<boolean>();


  showNavbar: boolean = false;
  constructor(
    private apiService : ApiRequestService,
    private route: Router,
  ) { }



  recipes:any;
  cookie:any;
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

  // goToRecipe(){
    
  // }


  toggleNavbar(){
    this.showNavbar =! this.showNavbar; 
    this.navBarToggle.emit(this.showNavbar);
  }

  navigateTo(id:any) {
    this.route.navigate(['/recipes/'+ id]);
  }
}
