import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EncryptService } from  '../../../services/encrypt.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { ApiRequestService } from '../../../services/apirequest.service'
 
@Component({
  selector: 'app-viewpage-body',
  templateUrl: './viewpage-body.component.html',
  styleUrls: ['./viewpage-body.component.css']
})
export class ViewpageBodyComponent implements OnInit {
  @Input() recipe: any;

  stars: number[] = [1,2,3,4,5];
  selectedValue : number = 0;
  comments: any;
  replies: any;
  recipe_id: any;

  constructor(
    private cookies: CookieService,
    private dataEnc: EncryptService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiRequestService
  ) {
  }
  contentForm: any;
  ngOnInit(): void {
   this.recipe = this.recipe.recipe[0];
   this.comments = this.recipe.comments;
   this.recipe_id = this.recipe.id;
    console.log(this.comments);
    
   //form for the comment
   this.contentForm = this.formBuilder.group({
     content: ['',[Validators.required]]
   });
  }
  
  countStar(star: any){
    this.selectedValue = star;
    this.isRateDisabled = false
  }

  isRateDisabled = true;

  addClass(star:any){
    let ndex = "";
    for(let i = 0; i <star; i++){
      ndex = "starId" + i;
      document.getElementById(ndex)?.classList.add("selected");
    }
   
  }
  removeClass(star:any){
    let ndex = "";
    for (let i = star-1;1 >= this.selectedValue; i--){
      ndex = "starId" + i;
      document.getElementById(ndex)?.classList.remove("selected");
    }
    
  }

  getAllComments() {
    this.apiService.apiRequest(`/recipes/${this.recipe_id}`, 'get')
      .subscribe((recipe:any)=> {
        console.log(recipe);
        
      })
  }

  onComment() {
    let cookie = this.cookies.get('__cookingtech');
    if(!cookie) {
      this.cookies.set('goto', window.location.href);
      window.location.href = 'login';
    }
    
    let content = this.contentForm.value;
    let recipe_id = this.recipe.id;
    let user_id = this.dataEnc.decrypt(cookie).user.id;


  }
}
