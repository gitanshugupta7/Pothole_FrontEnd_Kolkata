import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss'],
})
export class RecentsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  pothole: Object;

  imageURL = 'http://insomnia.rest/images/screens/main.png';
  showImage = false;

  RecentToOngoing(complaint_id1: any) {
    let body = {
      complaint_id: complaint_id1,
      status: 'Ongoing',
    };
    this.dataService.testData2(body).subscribe((res) => {
      console.log(res);
      this.loaddata();
    });
  }
  RecentToDeleted(complaint_id1: any) {
    let body = {
      complaint_id: complaint_id1,
    };
    this.dataService.testData3(body).subscribe((res) => {
      console.log(res);
      this.loaddata();
    });
  }

  loaddata() {
    this.dataService.testData1('Recent').subscribe((res) => {
      this.pothole = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.loaddata();
  }

  showThisImage(srcURl: any) {
    this.imageURL = srcURl;
    this.showImage = true;
  }
}
