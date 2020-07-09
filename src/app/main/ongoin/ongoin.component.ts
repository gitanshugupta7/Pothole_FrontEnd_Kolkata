import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ongoin',
  templateUrl: './ongoin.component.html',
  styleUrls: ['./ongoin.component.scss']
})
export class OngoinComponent implements OnInit {

 constructor(private dataService: DataService) {}
 
  pothole : Object;

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
    this.dataService.testData1("Ongoing").subscribe((res) => {
      this.pothole = res
      console.log(res);
  });
}

  ngOnInit(): void {
    this.loaddata();
  }
}