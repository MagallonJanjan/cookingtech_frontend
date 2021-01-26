import { Component, OnInit, Input } from '@angular/core';
import {ApiRequestService} from '../../services/apirequest.service';

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
  
  usertypes = [
    ["",""],
    ["chef_apprentice","chef_apprentice"],
    ["chef_master","chef_master"],
  ];

  totalData:any;
  page: number = 1;

  showSearch:boolean = false;

  constructor(private apiService:ApiRequestService) {
    this.info = {firstname: "", lastname: "", position: ""}
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

  approveButton(data:any){
    this.editedData={...data};
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
          alert ("data has deleted");
        })
  }

 
  getData(data:any){
    this.editedData=data;
  }

  editUserData(data:any){
   
  }
}
