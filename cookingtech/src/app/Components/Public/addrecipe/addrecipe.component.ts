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

    this.route.paramMap.subscribe((params:any) => {
      this.recipeId = params.get('id');
      console.log(this.recipeId);
    });
   }

  addRecipe: any;
  recipeId: any;
  updatedRecipe:any
  isEditRecipe = true;
  
  ngOnInit(): void {
  

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



     if(this.recipeId){
       this.apiRequest.apiRequest(`/recipes/${this.recipeId}`,"get")
          .subscribe((respond:any)=>{
            console.log(respond);
            this.updatedRecipe = respond.recipe[0];
            this.ingredientsArray = respond.recipe[0].ingredients;
            this.proceduresArray = respond.recipe[0].procedures;
            

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
          })

          this.apiRequest.apiRequest(`/recipes/${this.recipeId}`,"put",this.addRecipe.value)
              .subscribe((respond:any)=>{
                  Swal.fire("Recipe Updated Successfully","","success");
              },error =>{
                Swal.fire("Error"!)
                console.log(error);
              })
     }
      
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
  onSubmit(data : any){ 
    this.addRecipe.value.ingredients = this.ingredientsArray;
    this.addRecipe.value.procedures = this.proceduresArray;
    this.datas = this.addRecipe.value;
    let cookie = this.cookies.get('__cookingtech');
    let UserData = this.dataEnc.decrypt(cookie);
    this.datas["user_id"] = UserData.user.id;

    this.isRecipeSave = false;
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
