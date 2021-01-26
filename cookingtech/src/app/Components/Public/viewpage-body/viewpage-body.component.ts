import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage-body',
  templateUrl: './viewpage-body.component.html',
  styleUrls: ['./viewpage-body.component.css']
})
export class ViewpageBodyComponent implements OnInit {
  stars: number[] = [1,2,3,4,5];
  selectedValue : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  countStar(star: any){
    this.selectedValue = star;
  }
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
}
