import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  testData1(str:string, ward_no:any): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/pothole/'+ward_no+'/'+str+'/');
  }
   testData2(body:any): Observable<any> {
     return this.http.put('http://127.0.0.1:8000/pothole/'+body.complaint_id, body);
  }
  testData3(body:any): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/pothole/'+body.complaint_id, body);
 }
 mis_data(body:any){
   return this.http.get('http://127.0.0.1:8000/misdata/'+body);
 }
 graph_data(){
  return this.http.get('http://127.0.0.1:8000/graphdata/');
 }
}
