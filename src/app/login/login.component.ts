import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }
   
  council = 'Choose Your Council'
  ward_no = new FormControl('');


  loginfunction(){
     console.log(this.ward_no.value);
     this.route.navigate([this.council,this.ward_no.value,'recents']);
     
  }
  changename(str:any){
    this.council = str;
  }
  
  ngOnInit(): void {
  }

}
