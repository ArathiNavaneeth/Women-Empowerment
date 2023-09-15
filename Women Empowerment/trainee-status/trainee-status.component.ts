import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainee } from '../Trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainee-status',
  templateUrl: './trainee-status.component.html',
  styleUrls: ['./trainee-status.component.css']
})
export class TraineeStatusComponent implements OnInit {

  trainees: Trainee[];

  constructor(private router: Router,private traineeService:TraineeService) { }

  ngOnInit() {
    if(("fullName")!=null){
      this.traineeService.getUsers()
      .subscribe(data=>{
        this.trainees=data;
      });
    }
    // else
    // this.router.navigate(['']);
  }

}
