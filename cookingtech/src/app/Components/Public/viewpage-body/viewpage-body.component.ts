import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EncryptService } from '../../../services/encrypt.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { ApiRequestService } from '../../../services/apirequest.service';

import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-viewpage-body',
  templateUrl: './viewpage-body.component.html',
  styleUrls: ['./viewpage-body.component.css']
})
export class ViewpageBodyComponent implements OnInit {
  @Input() recipe: any;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  comments: any;
  replies: any;
  recipe_id: any;
  bookmarks: any;
  ratings: any;
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
    this.recipe = this.recipe.recipe[0];
    this.comments = this.recipe.comments;
    this.recipe_id = this.recipe.id;

    if (this.cookie) {
      console.log(this.dataEnc.decrypt(this.cookie).user);
      this.updateBookmarkContent(this.dataEnc.decrypt(this.cookie).user.id);
      this.updateRatings(this.recipe_id);
    }

    //form for the comment
    this.contentForm = this.formBuilder.group({
      content: ['', [Validators.required]]
    });
  }




  countStar(star: any) {
    this.selectedValue = star;
    this.isRateDisabled = false
  }



  //update the bookmarks

  updateBookmarkContent(user_id: any) {
    this.apiService.apiRequest(`/user/bookmarks/${user_id}`, 'get')
      .subscribe((respond: any) => {
        this.bookmarks = respond.user_bookmarks[0].bookmarks;
        console.log(this.bookmarks);

      });
  }

  //updates the ratings
  updateRatings(recipe_id: any) {
    this.apiService.apiRequest(`/recipes/${recipe_id}`, 'get')
      .subscribe((response: any) => {
        this.ratings = response.recipe[0].ratings;
        console.log(response);
      });
  }


  isExistedBookmark(data: any, checked: any): boolean {
    for (let bit of data) {
      if (bit.recipe_id === checked.recipe_id && bit.user_id === checked.user_id) {
        console.log("I was here");

        return true;
      }
    }
    return false
  }


  isRateDisabled = true;

  addClass(star: any) {
    let ndex = "";
    for (let i = 0; i < star; i++) {
      ndex = "starId" + i;
      document.getElementById(ndex) ?.classList.add("selected");
    }

  }


  removeClass(star: any) {
    let ndex = "";
    for (let i = star - 1; 1 >= this.selectedValue; i--) {
      ndex = "starId" + i;
      document.getElementById(ndex) ?.classList.remove("selected");
    }

  }

  addToBookmark() {
    if (!this.cookie) {
      this.router.navigate(['login']);
      this.cookies.set('goto', window.location.href);
      return;
    }

    let user_id = this.dataEnc.decrypt(this.cookie).user.id
    if (this.isExistedBookmark(this.bookmarks, { "user_id": user_id, "recipe_id": this.recipe_id })) {
     Swal.fire("You alreaded added it to your bookmarks!");
      return;
    }
    this.apiService.apiRequest('/bookmarks', "post", { "user_id": user_id, "recipe_id": this.recipe_id })
      .subscribe(respond => {
        console.log(respond);
        Swal.fire("Added to your bookmarks!");
        this.updateBookmarkContent(user_id);
      });
  }

  deleteToBookmark(){
    
  }


  getAllComments() {
    this.apiService.apiRequest(`/recipes/${this.recipe_id}`, 'get')
      .subscribe((recipe: any) => {
        console.log(recipe);

      })
  }
  cookie1:any;
  onComment() {
     this.cookie1 = window.localStorage.getItem('__cookingtech');
    if (!this.cookie1) {
      this.cookies.set('goto', window.location.href);
      window.location.href = 'login';
    }

    let content = this.contentForm.value;
    let recipe_id = this.recipe.id;
    let user_id = this.dataEnc.decrypt(this.cookie1).user.id;

    // this.apiService.apiRequest(`/comments`,"post", {"recipe_id": })


  }


  isRatingExisted(RatingData:any, rating: any) {
    for(let rate of RatingData ) {
      if(rate.user_id === rating.user_id && rate.recipe_id === rating.recipe_id) {
        return true;
      }
    }
    return false;
  }

  //submit ratings
  submitRate() {
    this.cookie = window.localStorage.getItem('__cookingtech');
    if (!this.cookie) {
      this.cookies.set('goto', window.location.href);
      window.location.href = 'login';
      return;
    }
    let user_id = this.dataEnc.decrypt(this.cookie).user.id;
    let rating = {"user_id": user_id, "recipe_id": this.recipe_id, "stars": this.selectedValue};
    
    if(this.isRatingExisted(this.ratings, rating)) {
      alert("You already rated this recipe!");
      return;
    }

    this.apiService.apiRequest(`/ratings`, "post", rating)
      .subscribe(
        (respond:any) => {
          alert("Thanks for your ratings!"); 
          this.updateRatings(this.recipe_id);
        }
      );
  }
}
