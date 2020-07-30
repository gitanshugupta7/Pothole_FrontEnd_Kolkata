import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss'],
})
export class RecentsComponent implements OnInit {

  constructor(private dataService: DataService, private router : ActivatedRoute) {}

  pothole: Object;
  ward_no : any;
  obj : Object;

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
    this.dataService.testData1('Recent',this.ward_no).subscribe((res) => {
      this.pothole = res.sort((obj1, obj2) => {
        if (obj1.no_of_reporters > obj2.no_of_reporters) {
            return -1;
        }
    
        if (obj1.no_of_reporters < obj2.no_of_reporters) {
            return 1;
        }
    
        return 0;
    });
      for(var d of res)
        {
          if(d['pothole_image'] != null)
          {
            d['pothole_image'] = 'http://127.0.0.1:8000' + d['pothole_image'];
  
          }
        }
    });
  }

  ngOnInit(): void {

    this.router.parent.paramMap.subscribe((param)=>{
      this.ward_no = param.get("ward_no")
      this.loaddata();
   });
  }

  showThisImage(srcURL : any) {
    this.showImage = true;
    this.imageURL = srcURL;
  }
}
