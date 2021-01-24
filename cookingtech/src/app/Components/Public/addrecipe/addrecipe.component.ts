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
    private http : HttpClient
  ) { }

  //addRecipe!:FormGroup
  
  ngOnInit(): void {
  
  }
 addRecipe = new FormGroup({
    recipeName : new FormControl('', [Validators.required , Validators.minLength(5)]),
    description : new FormControl('', [Validators.required , Validators.minLength(5)]),
    yield : new FormControl('', Validators.required),
    category : new FormControl('',Validators.required),
    tags : new FormControl('', Validators.required),
    ingredients : new FormControl(),
    procedure : new FormControl()
  })

  // selectedFile = null;
  // onFileSelected(event : any){
  //   this.selectedFile = event.target.files[0]
  // }


  
  ingredients: any[] = [];
  procedure:any[] = [];


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

  addProcedure(){
    this.procedure.push(this.addRecipe.value.procedure);
    (<HTMLInputElement>document.getElementById('procedure')).value = "";
    this.hiddenProcedure = true;
  }


  onSubmit(data : any){
    console.log(data)
    
  }


}
