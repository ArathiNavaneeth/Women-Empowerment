import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Trainee} from './Trainee';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  

  constructor(private http:HttpClient) { }
  baseurl:string= 'http://localhost:8090/Trainee/addtrainee';
  baseUrl:string= 'http://localhost:8090/Trainee';

  createUser(Trainee: Trainee){
    return this.http.post(this.baseurl,Trainee);
  }

   getUsers(){								
        return this.http.get<Trainee[]>(this.baseUrl+'/trainee');								
      }								
                    
      // Get User By Id								
      getUserById(id: number){								
        return this.http.get<Trainee>(this.baseUrl+'/trainee'+id);								
      }	
  
}
