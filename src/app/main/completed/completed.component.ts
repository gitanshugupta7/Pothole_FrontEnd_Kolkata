import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private dataService: DataService, private router : ActivatedRoute) {}
 
  pothole : Object;
  ward_no : any;

  loaddata(){
    this.dataService.testData1("Completed",this.ward_no).subscribe((res) => {
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