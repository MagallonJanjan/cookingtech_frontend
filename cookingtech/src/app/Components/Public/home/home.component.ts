import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EncryptService } from '../../../services/encrypt.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cookies: CookieService,
    private dataEnc: EncryptService
  ) { }

  user: any;
  cookie: any;
  ngOnInit()  : void {
    this.cookie = window.localStorage.getItem('__cookingtech');
    if(this.cookie) {
      this.user = this.dataEnc.decrypt(this.cookie).user; 
    }
  }

  

  onkeyUp(){
    
  }

}
