import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ongoin',
  templateUrl: './ongoin.component.html',
  styleUrls: ['./ongoin.component.scss']
})
export class OngoinComponent implements OnInit {

 constructor(private dataService: DataService, private router : ActivatedRoute) {}
 
  pothole : Object;
  ward_no : any;

  OngoingToCompleted(complaint_id1 : any){
    let body = { 
      complaint_id : complaint_id1,
      status : "Completed"  
    }
    this.dataService.testData2(body).subscribe((res)=>{
         console.log(res);
         this.loaddata();
    });
  }

  loaddata(){
    this.dataService.testData1("Ongoing", this.ward_no).subscribe((res) => {
      this.pothole = res
      console.log(res);
  });
}

  ngOnInit(): void {
    this.router.parent.paramMap.subscribe((param)=>{
      console.log(param)
      this.ward_no = param.get("ward_no")
      console.log(this.ward_no)
      this.loaddata();
   });
  }
}