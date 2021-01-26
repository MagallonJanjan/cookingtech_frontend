import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../../services/apirequest.service';
import { CookieService } from 'ngx-cookie-service';
import { EncryptService } from '../../../services/encrypt.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexGrid,
  ApexLegend,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexPlotOptions
} from 'ng-apexcharts';


//initialized the chart options
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: Array<any>;
  showSideBar: boolean = true;
  class: string = "click";
  title: any = "Dashboard";

  users: any;
  recipes: any;
  pendings: any;

  showDashboard: boolean;
  //graph components needs declaration
  chartOptions: ChartOptions;

  constructor(
    private apiService: ApiRequestService,
    private cookies: CookieService
  ) {
    this.data = [];
    this.showDashboard = true;
    this.chartOptions = {
      series: [
        {
          name: "Ratings",
          data: [21, 22, 10, 28, 16]
        }
      ],
      chart: {
        height: 550,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "50",
          distributed: true
        }
      },
      dataLabels: {
        enabled: true
      },
      legend: {
        show: true
      },
      grid: {
        show: true
      },
      xaxis: {
        categories: [
          "Recipe 1",
          "Recipe 2",
          "Recipe 3",
          "Recipe 4",
          "Recipe 5",
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    }

    //get all data
    this.getDatas();
   
  }

  ngOnInit(): void {
    
  }

  getDatas() {
     //retrieve all datas
     this.apiService.apiRequest('/users', "get")
     .subscribe(
       respond => {
         this.users = respond;
         console.log(this.users);
         
       }
     );

   //pendings
   this.apiService.apiRequest('/recipes/status/pendings', "get")
     .subscribe(
       respond => {
         this.pendings = respond;
         console.log(this.pendings);
         
       }
     );

     //active recipes
   this.apiService.apiRequest('/recipes', "get")
     .subscribe(
       respond => {
         this.recipes = respond;
         console.log(this.recipes);
       }
     )
  }


  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
  }

  showDasboardFun() {
    this.showDashboard = true;
    this.title = "Dashboard"
  }

  getDataOnclick(kindOfData: string) {
    this.showDashboard = false;
    if(kindOfData == "users") {
      this.data = this.users.users.filter((user:any)=>{
        return user.usertype != "admin"
      });
      this.title = "Users"
      return;
    }
    if(kindOfData == "recipes") {
      this.data = this.recipes || [];
      this.title = "Recipes";
      return;
    }
    if(kindOfData == "pendings") {
      this.data = this.pendings.pendings.filter((pendings:any)=>{
        return pendings.status == false;
      });
      this.title = "Pendings";
      return;
    }
  }

  logout() {
    //clear all broswer storages
    this.apiService.apiRequest('/users/logout',"post",{}).subscribe(respond => {
      window.localStorage.removeItem('token');
      this.cookies.delete('__cookingtech');
      window.location.reload();
      console.log(respond);
      
    }) 
  }
}
