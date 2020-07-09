import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss'],
})
export class RecentsComponent implements OnInit {
  constructor(private dataService: DataService) {}
 
  pothole : Object;
  

  passtoapi(id1 : any, complaint_id1 : any, ward_no1 : any, no_of_reporters1 : any, image1: any){
    let body = {
      id: id1,
      complaint_id: complaint_id1,
      status: "C",
      ward_no: ward_no1,
      no_of_reporters: no_of_reporters1,
      feedback_flag: false,
      image : image1,
    }
    this.dataService.testData2(body).subscribe((res)=>{
         console.log(res);
         this.loaddata();
    });
  }
  loaddata(){
    this.dataService.testData1().subscribe((res) => {
      this.pothole = res
      console.log(res);
  });
}

  ngOnInit(): void {
    this.loaddata();
  }
}
