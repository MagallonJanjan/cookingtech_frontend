import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-viewpage-header',
  templateUrl: './viewpage-header.component.html',
  styleUrls: ['./viewpage-header.component.css']
})
export class ViewpageHeaderComponent implements OnInit {
  @Output() navBarToggle = new EventEmitter<boolean>();


  showNavbar: boolean = false;
  constructor() { }

  cookie: any;
  ngOnInit(): void {
    this.cookie = window.localStorage.getItem('token');
  }
  toggleNavbar(){
    this.showNavbar =! this.showNavbar; 
    this.navBarToggle.emit(this.showNavbar);
  }
}
