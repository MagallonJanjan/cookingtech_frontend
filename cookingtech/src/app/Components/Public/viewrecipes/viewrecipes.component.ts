import { Component, OnInit, Input } from '@angular/core';
import {ApiRequestService} from '../../../services/apirequest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-viewrecipes',
  templateUrl: './viewrecipes.component.html',
  styleUrls: ['./viewrecipes.component.css']
})

export class ViewrecipesComponent implements OnInit {
  @Input() recipes:any; 
  @Input() category?: any;

  
  constructor(private apiService:ApiRequestService,
    private route: Router) {
    console.log(this.recipes);
    this.category = "All";
  }
  ngOnInit(): void {
  }

 getRecipe(id:any){
   console.log(id);
    this.route.navigate([`/recipes/${id}`]);
 }

 //remove bookmarks
 removeBookmark(id:any) {
    this.apiService.apiRequest(`/bookmarks/${id}`, "delete", {}).subscribe(
      respond => {
        Swal.fire("Deleted successfully!","success","success") ;
        window.location.reload();
      }
    );
 }

 capitalize(s:string) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}


deleteRecipe(id:any) {
  this.apiService.apiRequest(`/recipes/${id}`, "delete",{})
    .subscribe(respond => {
      Swal.fire("Deleted successfully!","success","success");
      window.location.reload();
    });
}

editRecipe(id:any) {

}
}
