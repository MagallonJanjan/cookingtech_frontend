import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private formBuilder : FormBuilder
  ) { }

  addRecipe:any;
  
  ngOnInit(): void {
    this.addRecipe = this.formBuilder.group({
      recipeName : ['', [Validators.required, Validators.minLength(6)]],
      description : ['', [Validators.required, Validators.minLength(25)]],
      yield :  ['', Validators.required],
      category :  ['', Validators.required],
      ingredients :  ['',  [Validators.required, Validators.minLength(4)]],
      procedure :  ['',  [Validators.required, Validators.minLength(4)]],
      tags : ['',[Validators.required, Validators.minLength(5)]],
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
    this.proceduresArray.push(this.addRecipe.value.procedure);
   (<HTMLInputElement>document.getElementById('procedure')).value = "";
    this.hiddenProcedure = true;
  }


  onSubmit(data : any){
    console.log(data)
    this.addRecipe.value.ingredients = this.ingredientsArray;
    this.addRecipe.value.procedure = this.proceduresArray;
  }

  onSave(){
    alert('Recipe added successfully!');
    this.addRecipe.reset();
    
  }


  removeIngredientItem(item:any){
    this.ingredientsArray.splice(this.ingredientsArray.indexOf(item),1)
  }

  removeProcedureItem(item:any){
    this.proceduresArray.splice(this.proceduresArray.indexOf(item),1)
  }

}
