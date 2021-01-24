import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor() { }

  //addRecipe!:FormGroup

  ngOnInit(): void {
  
  }
 addRecipe = new FormGroup({
    recipeName : new FormControl(),
    description : new FormControl(),
    yield : new FormControl(),
    category : new FormControl(),
    tags : new FormControl(),
    ingredients : new FormControl(),
    procedure : new FormControl()
  })


  
  ingredients: any[] = [];
 
  hidden = true;
  showMe(){
    this.hidden = !this.hidden;
  }

  hiddenProcedure = true;
  showProcedure(){
    this.hiddenProcedure = !this.hiddenProcedure;
  }

  addIngredients(){
    this.ingredients.push(this.addRecipe.value.ingredients);
    (<HTMLInputElement>document.getElementById('lingling')).value = ""
    this.hidden = true
  }


  procedure:any[] = [];
  addProcedure(){
    this.procedure.push(this.addRecipe.value.procedure);
    (<HTMLInputElement>document.getElementById('procedure')).value = "";
    this.hiddenProcedure = true;
  }


  onSubmit(data : any){
    console.log(data)
  }

}
