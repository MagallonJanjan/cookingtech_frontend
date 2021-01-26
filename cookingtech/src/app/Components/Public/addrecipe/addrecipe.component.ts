import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiRequestService } from '../../../services/apirequest.service';

import { EncryptService } from '../../../services/encrypt.service';
import { CookieService } from  'ngx-cookie-service';
 
@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private formBuilder : FormBuilder,
    private apiRequest : ApiRequestService,
    private dataEnc : EncryptService,
    private cookies : CookieService
  ) { }

  addRecipe:any;
  
  ngOnInit(): void {
    this.addRecipe = this.formBuilder.group({
      name : ['', [Validators.required, Validators.minLength(6)]],
      description : ['', [Validators.required, Validators.minLength(25)]],
      yield :  ['', Validators.required],
      category :  ['', Validators.required],
      ingredients :  ['',  [Validators.required, Validators.minLength(4)]],
      procedures :  ['',  [Validators.required, Validators.minLength(4)]],
      tag : ['',[Validators.required, Validators.minLength(5)]],
      img_url : ['',[Validators.required]]
    })
  
  }
 
  ingredientsArray: any[] = [];
  proceduresArray:any[] = [];

  
  hidden = true;
  showMe(){
    this.hidden = !this.hidden;
  }

  hiddenProcedure = true;
  showProcedure(){
    this.hiddenProcedure = !this.hiddenProcedure;
  }

  
  addIngredients(){
    this.ingredientsArray.push(this.addRecipe.value.ingredients);
   (<HTMLInputElement>document.getElementById('lingling')).value = ""
    this.hidden = true
  }

  addProcedure(){
    this.proceduresArray.push(this.addRecipe.value.procedures);
   (<HTMLInputElement>document.getElementById('procedure')).value = "";
    this.hiddenProcedure = true;
  }


  // onSave(){
  //   alert('You are adding a new recipe!');
  //   this.addRecipe.reset();
    
  // }


  removeIngredientItem(item:any){
    this.ingredientsArray.splice(this.ingredientsArray.indexOf(item),1)
  }

  removeProcedureItem(item:any){
    this.proceduresArray.splice(this.proceduresArray.indexOf(item),1)
  }


  datas:any;
  onSubmit(data : any){ 
    this.addRecipe.value.ingredients = this.ingredientsArray;
    this.addRecipe.value.procedures = this.proceduresArray;
    this.datas = this.addRecipe.value;
    let cookie = this.cookies.get('__cookingtech');
    let UserData = this.dataEnc.decrypt(cookie);
    this.datas["user_id"] = UserData.user.id;

  
    
    this.apiRequest.apiRequest('/recipes','post', this.datas)
      .subscribe( respond => {
        console.log(respond);
        alert('You are adding a new recipe!');
        this.addRecipe.reset()

        this.ingredientsArray = [];
        this.proceduresArray = [];
      },error => {
        console.log(error);
      }) 
  }


}
