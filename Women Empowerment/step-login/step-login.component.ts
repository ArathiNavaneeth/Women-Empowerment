import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TraineeService } from '../trainee.service';
import { TraineedashboardComponent } from '../traineedashboard/traineedashboard.component';

@Component({
  selector: 'app-step-login',
  templateUrl: './step-login.component.html',
  styleUrls: ['./step-login.component.css']
})
export class StepLoginComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,private router: Router,
    private TraineeService: TraineeService) { }

  ngOnInit(){
    this.addForm=this.formBuilder.group({
    fullName: ['',Validators.required],
    dob:['',Validators.required],
    gender:['',Validators.required],
    contactNumber:['',Validators.required],
    emailID:['',Validators.required],
    address:['',Validators.required],
    aadharNumber:['',Validators.required],
    password:['',Validators.required]
    
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.addForm.invalid){
      return;
    }
    this.TraineeService.createUser(this.addForm.value)
    .subscribe(date =>{
      this.router.navigate(['traineedashboard']);
    });
  }

}
