import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiRequestService } from '../../../services/apirequest.service';
import { ActivatedRoute } from '@angular/router';

import { EncryptService } from '../../../services/encrypt.service';
import { CookieService } from 'ngx-cookie-service';

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
    private route: ActivatedRoute
  ) { }

  addRecipe: any;
  recipeId: any;
  recipe: any;
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
    })


    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('id');
    });


    if (this.recipeId) {
      this.apiRequest.apiRequest(`/recipes/${this.recipeId}`,"get")
        .subscribe( (respond:any)=> {
          this.recipe = respond.recipe[0];
          this.addRecipe = this.formBuilder.group({
            name: [this.recipe.name, [Validators.required, Validators.minLength(6)]],
            description: [this.recipe.description, [Validators.required, Validators.minLength(25)]],
            yield: ['', Validators.required],
            category: ['', Validators.required],
            ingredients: ['', [Validators.required, Validators.minLength(3)]],
            procedures: ['', [Validators.required, Validators.minLength(4)]],
            tag: ['', [Validators.required, Validators.minLength(5)]],
            img_url: ['', [Validators.required]]
          })
        } );
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


  datas: any;
  onSubmit(data: any) {
    this.addRecipe.value.ingredients = this.ingredientsArray;
    this.addRecipe.value.procedures = this.proceduresArray;
    this.datas = this.addRecipe.value;
    let cookie = this.cookies.get('__cookingtech');
    let UserData = this.dataEnc.decrypt(cookie);
    this.datas["user_id"] = UserData.user.id;



    this.apiRequest.apiRequest('/recipes', 'post', this.datas)
      .subscribe(respond => {
        console.log(respond);
        alert('You are adding a new recipe!');
        this.addRecipe.reset()

        this.ingredientsArray = [];
        this.proceduresArray = [];
      }, error => {
        console.log(error);
      })
  }
  disableAddButton = true;
  procedures: any;


  // inputIngredients = (<HTMLInputElement>document.getElementById("lingling"));
  // inputProcedure =  (<HTMLInputElement>document.getElementById("procedure"));





}
