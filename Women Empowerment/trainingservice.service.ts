import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Training} from './Training';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  

  constructor(private http:HttpClient) { }
  baseurl:string= 'http://localhost:8090/TrainingService/addtraining';

  createuser(Training:Training){
    return this.http.post(this.baseurl,Training);
  }

  // createUser(Training: Training): Observable<any>{
   
  //   console.log("inside createtraining");

  //   this.courseid=localStorage.getItem('courseid');

  //   console.log("this.courseid" +this.courseid);

  //   this.d=Number("d"+this.courseid);
  //   return this.http.post(this.baseurl+'/' + this.courseid,Training);
  // }

  // CreateUser(Training: Training): Observable<any>{
  //   // return this.http.post(this.baseurl,Training);
  //   console.log("inside createtraining");

  //   this.userId=localStorage.getItem('userId');

  //   console.log("this.userId" +this.userId);

  //   this.t=Number("t"+this.userId);
  //   return this.http.post(this.baseurl+'/' + this.userId,Training);
  // }

}
