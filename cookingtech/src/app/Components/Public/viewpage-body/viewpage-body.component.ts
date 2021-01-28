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
  bookmarks: any;
  cookie: any; 

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
    //get the uesr_id first
    this.cookie = window.localStorage.getItem('__cookingtech');
    if(this.cookie) {
      console.log(this.dataEnc.decrypt(this.cookie).user);
      
      this.apiService.apiRequest(`/user/bookmarks/${this.dataEnc.decrypt(this.cookie).user.id}`, 'get')
        .subscribe((respond: any)=> {
          this.bookmarks = respond.user_bookmarks[0].bookmarks;
          console.log(this.bookmarks);
          
        });
    }

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


  isExisted(data:any, checked:any): boolean {
    for(let bit of data) {
      if(bit.recipe_id == checked.recipe_id && bit.user_id == checked.uesr_id) {
        return true;
      }
    } 
    return false
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

  addToBookmark() {
    if(!this.cookie) {
      this.router.navigate(['login']);
      this.cookies.set('goto', window.location.href);
      return;
    }

    if(!this.isExisted) {
      alert("You alreaded added it to your bookmarks!");
      return;
    }

    let user_id =this.dataEnc.decrypt(this.cookie).user.id
    

    this.apiService.apiRequest('/bookmarks',"post", {"user_id": user_id,"recipe_id": this.recipe_id})
      .subscribe(respond => {
        console.log(respond);
        alert("Added to your bookmarks!");
        
      });
  }


  getAllComments() {
    this.apiService.apiRequest(`/recipes/${this.recipe_id}`, 'get')
      .subscribe((recipe:any)=> {
        console.log(recipe);
        
      })
  }

  onComment() {
    let cookie = window.localStorage.get('__cookingtech');
    if(!cookie) {
      this.cookies.set('goto', window.location.href);
      window.location.href = 'login';
    }
    
    let content = this.contentForm.value;
    let recipe_id = this.recipe.id;
    let user_id = this.dataEnc.decrypt(cookie).user.id;


  }
}
