import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-home-body',
  templateUrl: './user-home-body.component.html',
  styleUrls: ['./user-home-body.component.css']
})
export class UserHomeBodyComponent implements OnInit {
  @Output() navBarToggle = new EventEmitter<boolean>();


  showNavbar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    this.showNavbar =! this.showNavbar; 
    this.navBarToggle.emit(this.showNavbar);
  }
}
