import { Component, OnInit } from '@angular/core';
import { multi, single } from '../statistics/data';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  graph_data: Object;
  ward_no : any;
  pie_data : Object
  pie_data_particular : Object

  view: any[] = [700, 300];

  constructor(private dataService: DataService, private router : ActivatedRoute) 
  { 
   
  }

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'No Of Potholes';
  xAxisLabel: string = 'Date';
  timeline: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#10DAD6', '#D5315E', '#FDC312', '#F8AD3E', '#E44A4C', '#FB7974']
  };
  
  loadgraph1(){
    this.dataService.graph_data(this.ward_no,'reg_vs_comp').subscribe((res) =>{
       this.graph_data = res;
       console.log(res);
    });
  }

  loadgraph2(){
    this.dataService.graph_data(this.ward_no,'piedata_all').subscribe((res) =>{
       this.pie_data = res;
       console.log(res);
    });
  }

  loadgraph3(){
    this.dataService.graph_data(this.ward_no,'piedata_particular').subscribe((res) =>{
       this.pie_data_particular = res;
       console.log(res);
    });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    this.router.parent.paramMap.subscribe((param)=>{
      this.ward_no = param.get("ward_no")
      console.log(this.ward_no)
      this.loadgraph1();
      this.loadgraph2();
      this.loadgraph3();
   });
  }

}
