import { Component, OnInit } from '@angular/core';
import { DataService } from '../main/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  

  constructor(private dataService: DataService, private router : ActivatedRoute) {  }

  ward_no : any;
  mis_info : any;
  
  loadmis(){
    this.dataService.mis_data(this.ward_no).subscribe((res) =>{
       this.mis_info = res
       console.log(res)
      //  this.piechart();
    });
  }

 



  ngOnInit(): void {

    this.router.paramMap.subscribe((param)=>{
      this.ward_no = param.get("ward_no")
      this.loadmis();
   });

  }

}
