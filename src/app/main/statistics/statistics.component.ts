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
  multi : any[];
  view: any[] = [900, 300];

  constructor(private dataService: DataService, private router : ActivatedRoute) 
  { 
    Object.assign(this, { multi });
    Object.assign(this, { single });
  }

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  single: any[];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  
  loadgraph(){
    this.dataService.graph_data().subscribe((res) =>{
       this.graph_data = res;
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
    this.loadgraph();
  }

}
