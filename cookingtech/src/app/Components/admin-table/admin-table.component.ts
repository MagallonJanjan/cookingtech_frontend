import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApiRequestService} from '../../services/apirequest.service';
import { Router } from '@angular/router';
import {FormBuilder,FormControl,Validator, Validators} from '@angular/forms';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  @Input() users:any;
  @Input() tableTitle:any;
  @Input() data: any;
  @Output() changes = new EventEmitter<any>();
  
  datas: any;
  editedData:any;
  editedUserData:any;

  info: any;
  recipe:any;
  
  usertypes = [
    ["chef_apprentice","chef_apprentice"],
    ["chef_master","chef_master"],
  ];


  totalData:any;
  page: number = 1;
  usertype:any;
  showSearch:boolean = false;

  constructor(private apiService:ApiRequestService,
              private router : Router,private formBuilder:FormBuilder) {
    this.info = {firstname: "", lastname: "", position: ""}
    this.recipe ={name:"",description:"",tag:"",ingredients:[],procedures:[],yield:"",category:""}
   }

  ngOnInit(): void {
    this.totalData = this.data.length;
    this.datas = this.data;
    this.usertype=this.formBuilder.group({
      newUserType:[
        "",[Validators.required]
      ]
  
    })
  
    console.log(this.data);
    
  } 

  pageChanged(page:any) {
    this.page = page;
  }


  getUserData(data:any){
    this.info = data;
  }

  editUserStatus(data:any){
    this.editedUserData=data;
    this.editedUserData.usertype=this.usertype.value.newUserType;

    console.log(this.editedUserData);
    
    this.apiService.apiRequest(`/users/${this.editedUserData.id}`,"put",this.editedUserData)
      .subscribe(respond=>{
        console.log(respond);
        this.changes.emit("users");

        

      })
  }

  getRecipeData(data:any){
    this.recipe=data;
    console.log(this.recipe);
    
  }

  approveButton(data:any){
    this.editedData=data;
    this.editedData.status = true;
    console.log(this.editedData);
    delete this.editedData["user_id"];
    delete this.editedData["tag"];
    
    this.apiService.apiRequest(`/recipes/${this.editedData.id}`,"put",this.editedData)

      .subscribe(respond=>{
        console.log(respond);
        this.changes.emit("pendings");
      })
    }

    deleteData(){
      this.editedData.id;
      let url = this.editedData.name?'recipes':'users'
      this.apiService.apiRequest(`/${url}/${this.editedData.id}`,"delete",this.editedData)
        .subscribe(async respond=>{
          this.changes.emit(url);
          
          await this.apiService.apiRequest(`/users`, 'get').subscribe((respond:any)=> {
            this.data = respond.users.filter((admin: any)=> {
              return admin.usertype != "admin";
            });
            console.log(respond.users);
            
          })
        })
  }

 
  getData(data:any){
    this.editedData=data;
  }

  editUserData(id:any){
    this.router.navigate([`edit-recipe/${id}`]);
  }

  epilsesLimit(description:string) {
    let tempString = description.slice(0, 40);
    return tempString + "...";
  }
}
