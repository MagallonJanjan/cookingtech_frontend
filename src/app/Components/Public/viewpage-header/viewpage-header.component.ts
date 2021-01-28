import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage-header',
  templateUrl: './viewpage-header.component.html',
  styleUrls: ['./viewpage-header.component.css']
})
export class ViewpageHeaderComponent implements OnInit {

  constructor() { }

  cookie: any;
  ngOnInit(): void {
    this.cookie = window.localStorage.getItem('token');
  }

}
