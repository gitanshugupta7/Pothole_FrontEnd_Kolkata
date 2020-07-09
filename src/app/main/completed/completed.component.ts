import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private dataService: DataService) {}
 
  pothole : Object;

  loaddata(){
    this.dataService.testData1("Completed").subscribe((res) => {
      this.pothole = res
      console.log(res);
  });
}

  ngOnInit(): void {
    this.loaddata();
  }
}