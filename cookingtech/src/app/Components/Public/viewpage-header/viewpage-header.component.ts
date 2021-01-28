import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ApiRequestService} from '../../../services/apirequest.service';
import { FormsModule } from '@angular/forms';
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
    private router : Router
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

        // this.router.paramMap.subscribe(
        //   (params:any) => {
        //     this.recipe_id = params.get('id');
        //     console.log(this.recipe_id); 
        //   });
  }

  values:any;
  name:any;
  recipe_id:any

  onKey(item:any) {
        item = (item == "")?"~!$^*(*" : item;
        item = item.toLowerCase();
        this.values = this.recipes.filter((recipe:any)=> {
          return recipe.name.toLowerCase().includes(item);
        });
        console.log(this.values);   
  }

  goToRecipe(id:any){

    // alert("I was clicked!")
    // this.router.navigate(['/'])
  }

  
  toggleNavbar(){
    this.showNavbar =! this.showNavbar; 
    this.navBarToggle.emit(this.showNavbar);
  }
}
