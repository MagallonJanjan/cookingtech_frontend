import { Component, OnInit, Input } from '@angular/core';
import {ApiRequestService} from '../../services/apirequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  @Input() users:any;
  @Input() tableTitle:any;
  @Input() data: any;
  
  
  datas: any;
  editedData:any;

  info: any;
  recipe:any;
  
  usertypes = [
    ["",""],
    ["chef_apprentice","chef_apprentice"],
    ["chef_master","chef_master"],
  ];


  totalData:any;
  page: number = 1;

  showSearch:boolean = false;

  constructor(private apiService:ApiRequestService,
              private router : Router) {
    this.info = {firstname: "", lastname: "", position: ""}
    this.recipe ={name:"",description:"",tag:"",ingredients:[],procedures:[],yield:"",category:""}
   }

  ngOnInit(): void {
    this.totalData = this.data.length;
    this.datas = this.data;
    
  } 

  pageChanged(page:any) {
    this.page = page;
  }

  getUserData(data:any){
    this.info = data;
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
        alert("approved");
        console.log(respond);
      })
    }

    deleteData(){
      this.editedData.id;
      let url = this.editedData.name?'recipes':'users'
      this.apiService.apiRequest(`/${url}/${this.editedData.id}`,"delete",this.editedData)
        .subscribe(respond=>{
          alert("deleted Successfully");
        })
  }

 
  getData(data:any){
    this.editedData=data;
  }

  editUserData(id:any){
    this.router.navigate([`edit-recipe/${id}`]);
  }

  
}
