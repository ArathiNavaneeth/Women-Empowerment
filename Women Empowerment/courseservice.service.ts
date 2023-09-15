import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http:HttpClient) { }
  baseUrl: string = 'http://localhost:8090/course';

  //create ngo
  //createUser(course: Course){
    //return this.http.post(this.baseUrl+'/addNgo', course);
  //}

  // Get All Users								
  //   getUsers(){								
  //       return this.http.get<Course[]>(this.baseUrl+'/ngos');								
  //     }								
                    
      // Get User By Id								
    //   getUserById(courseid: number){								
    //     return this.http.get<Course>(this.baseUrl+'/'+courseid);								
    //   }		

    getCourseNumbers()
 {
  console.log(this.http.get<any[]>(this.baseUrl+'/ids'));
  return this.http.get<any[]>(this.baseUrl+'/ids');
 }
}

