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
    ingredients : new FormControl()
  })


  
  view: any[] = [];
  addIngredients(){
    this.view.push(this.addRecipe.value.ingredients);
    (<HTMLInputElement>document.getElementById('lingling')).value = "" 

  }


  onSubmit(data : any){
    console.log(data)
  }

  hidden = true;
  showMe(){
    this.hidden = !this.hidden;
  }

}
