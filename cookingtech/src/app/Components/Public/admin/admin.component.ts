import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../../services/apirequest.service';
import { ApexAxisChartSeries,
         ApexChart,
         ApexGrid,
         ApexLegend,
         ApexXAxis,
         ApexYAxis,
         ApexDataLabels,
         ApexPlotOptions} from 'ng-apexcharts';


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

  data:Array<any>;
  temp:any;
  showSideBar:boolean = true;
  class:string = "click";
  title:any;

  showDashboard:boolean;
  //graph components needs declaration
  chartOptions: ChartOptions;

  constructor(
    private apiService: ApiRequestService
  ) {
    this.data = [];
    this.showDashboard = true;

    this.chartOptions = {
      series:[
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
          "John Doe",
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
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

   }

  ngOnInit(): void {
    
  }

  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
  }

  showDasboardFun() {
    this.showDashboard = true;
  }

  getDataOnclick(kindOfData:string) {    
    this.showDashboard = false;
    this.apiService.apiRequest(kindOfData,"get")
      .subscribe(respond => {
        this.temp = respond;
        this.data = this.temp.users || respond;
        this.title = (this.temp.users)? "USERS":"RECIPES"
      });
  }
}
