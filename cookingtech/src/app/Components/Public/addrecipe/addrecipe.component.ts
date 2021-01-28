import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiRequestService } from '../../../services/apirequest.service';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

import { EncryptService } from '../../../services/encrypt.service';
import { CookieService } from 'ngx-cookie-service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private apiRequest: ApiRequestService,
    private dataEnc: EncryptService,
    private cookies: CookieService,
    private route: ActivatedRoute,
    private location: Location
  ) {


    }


  ngOnInit(): void {

    //getting recipe Ids
    this.route.paramMap.subscribe((params:any) => {
      this.recipeId = params.get('id');
      console.log(this.recipeId);
    });

    if(this.recipeId){
      this.apiRequest.apiRequest(`/recipes/${this.recipeId}`,"get")
         .subscribe((respond:any)=>{
           console.log(respond);
           this.updatedRecipe = respond.recipe[0];
           this.ingredientsArray = respond.recipe[0].ingredients;
           this.proceduresArray = respond.recipe[0].procedures;
           console.log(respond.recipe[0]);
    
           
           
           this.addRecipe = this.formBuilder.group({
             name: [this.updatedRecipe.name,[Validators.required, Validators.minLength(6)]],
             description: [this.updatedRecipe.description, [Validators.required, Validators.minLength(25)]],
             yield: [this.updatedRecipe.yield, Validators.required],
             category: [this.updatedRecipe.category, Validators.required],
             ingredients: ['', [Validators.required, Validators.minLength(3)]],
             procedures: ['', [Validators.required, Validators.minLength(4)]],
             tag: [this.updatedRecipe.tag, [Validators.required, Validators.minLength(5)]],
             img_url: [this.updatedRecipe.img_url, [Validators.required]]
            });

          
           this.isEditRecipe = false;
           this.recipeToUpdate = this.addRecipe.value;
           console.log(this.addRecipe.value);
           
         })
      }

    
    // Form for creating recipe
    this.addRecipe = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.minLength(25)]],
      yield: ['', Validators.required],
      category: ['', Validators.required],
      ingredients: ['', [Validators.required, Validators.minLength(3)]],
      procedures: ['', [Validators.required, Validators.minLength(4)]],
      tag: ['', [Validators.required, Validators.minLength(5)]],
      img_url: ['', [Validators.required]]
     });
      
  }

  addRecipe: any;
  recipeId: any;
  updatedRecipe:any
  isEditRecipe = true;
  recipeToUpdate:any;
  isUpdateSave = true;
  isCancel = false;


  newUpdate(){

    this.isUpdateSave = false;
    this.isCancel = true;

    this.recipeToUpdate.ingredients = this.ingredientsArray;
    this.recipeToUpdate.procedures = this.proceduresArray;

    this.apiRequest.apiRequest(`/recipes/${this.recipeId}`,"put", this.recipeToUpdate)
    .subscribe((respond:any)=>{
        alert('Recipe updated successfully!');
        this.isUpdateSave = true;
        console.log(respond);
        this.isCancel = false;
        
    },
      error =>{
        Swal.fire('Failed to Update!');
        this.isUpdateSave = true;
        console.log(error);
        this.isCancel = false;
    })
  }

  
  ingredientsArray: any[] = [];
  proceduresArray: any[] = [];


  addIngredients() {
    this.ingredientsArray.push(this.addRecipe.value.ingredients);
    (<HTMLInputElement>document.getElementById('lingling')).value = ""
    
  }

  addProcedure() {
    this.proceduresArray.push(this.addRecipe.value.procedures);
    (<HTMLInputElement>document.getElementById('procedure')).value = "";

  }

  removeIngredientItem(item: any) {
    this.ingredientsArray.splice(this.ingredientsArray.indexOf(item), 1)
  }

  removeProcedureItem(item: any) {
    this.proceduresArray.splice(this.proceduresArray.indexOf(item), 1)
  }


  isRecipeSave = true;
  datas:any;
  cookie: any;
  onSubmit(data : any){ 
    this.addRecipe.value.ingredients = this.ingredientsArray;
    this.addRecipe.value.procedures = this.proceduresArray;
    this.datas = this.addRecipe.value;
    this.cookie = window.localStorage.getItem('__cookingtech');
    let UserData = this.dataEnc.decrypt(this.cookie);
    this.datas["user_id"] = UserData.user.id;

    this.isRecipeSave = false
    this.apiRequest.apiRequest('/recipes','post', this.datas)
      .subscribe( respond => {
        console.log(respond);
        Swal.fire("Recipe Added","","success")
        this.location.back();
        this.addRecipe.reset()
        this.isRecipeSave = true;

        this.ingredientsArray = [];
        this.proceduresArray = [];
      }, error => {
        console.log(error);
      })
  }

  disableAddButton = true;
  procedures:any;
}
