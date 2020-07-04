import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  testData1(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/pothole/');
  }
   testData2(body:any): Observable<any> {
     return this.http.put('http://127.0.0.1:8000/pothole/'+body.id+'/' ,body);
  }
}
