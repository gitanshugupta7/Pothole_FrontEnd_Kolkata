import { Component, OnInit } from '@angular/core';
import { DataService } from '../main/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService, private router : ActivatedRoute) { }

  ward_no : any;
  mis_info : any;
  
  loadmis(){
    this.dataService.mis_data(this.ward_no).subscribe((res) =>{
       this.mis_info = res
       console.log(res)
      //  this.piechart();
    });
  }

  // piechart(){
  //   var chart = new CanvasJS.Chart("chartContainer", {
  //     animationEnabled: true,
  //     theme: "light2", // "light2", "dark1", "dark2"
  //     title: {
  //       text: ""
  //     },
  //     data: [{
  //       type: "pie",
  //       startAngle: 240,
  //       yValueFormatString: "##0.00\"%\"",
  //       indexLabel: "{label} {y}",
  //       dataPoints: [
  //         {y: this.mis_info.completed, label: "Completed"},
  //         {y: this.mis_info.registered, label: "Complaint"},
  //       ]
  //     }],
  //   });
  //   chart.render();
  // }


  ngOnInit(): void {

    this.router.paramMap.subscribe((param)=>{
      this.ward_no = param.get("ward_no")
      this.loadmis();
   });

  }

}
