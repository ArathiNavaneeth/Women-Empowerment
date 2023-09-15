import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TrainingService } from '../trainingservice.service';
import { CourseserviceService } from '../courseservice.service';
import { TraineedashboardComponent } from '../traineedashboard/traineedashboard.component';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-courseregsiter',
  templateUrl: './courseregister.component.html',
  styleUrls: ['./courseregister.component.css']
})
export class CourseregisterComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;

  // selectedCourse:string;
  // selectedTrainee:string;
  // courseList: number[]=[];
  // // traineeList: number[]=[];
  // location:string;
  // ngoname:string;
  // courseid:number;
  // userid:number;
  
  // courses: number[] = [];
  // // courseForm:FormGroup;
  // trainees: number[] = [];
  // // traineeForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder,private router: Router,
    private TrainingService: TrainingService, private courseSer: CourseserviceService, 
    private traineeser: TraineeService) { }

  ngOnInit(){
    // this.courseNumbers();
    // this.traineeNumbers();
    this.addForm=this.formBuilder.group({
    // trainingId:['',Validators.required],
    location: ['',Validators.required],
    ngoname:['',Validators.required],
    courseid:['',Validators.required],
    userid:['',Validators.required]
    });

    // this.courseForm = this.formBuilder.group({

    //   courses: ['', Validators.required],

    // });

    // this.traineeForm = this.formBuilder.group({

    //   trainees: ['', Validators.required],

    // });
    
  }

  // get f() {
  //   return this.addForm.controls;
  // }

  // selectCourse(e: any) {

  //   console.log(e.target.value);
  //   this.selectedCourse = e.target.value;
  //   localStorage.setItem('courseid',this.selectedCourse);
  //    sessionStorage.setItem('courseid',this.selectedCourse);
  // }

  // selectTrainee(e: any) {

  //   console.log(e.target.value);
  //   this.selectedTrainee = e.target.value;
  //   localStorage.setItem('userId',this.selectedTrainee);
  //    sessionStorage.setItem('userId',this.selectedTrainee);
  // }

  // onsubmit(){
  //   this.submitted=true;
  //   if(this.addForm.invalid){
  //     return;
  //   }
  //   this.TrainingService.createuser(this.addForm.value)
  //   .subscribe(date =>{
  //     this.router.navigate(['traineedashboard']);
  //   });
  // }

  onSubmit(){
    // console.log(this.courses);
    // this.submitted=true;
    // if(this.addForm.invalid){
    //   return;
    // }  
    // this.TrainingService.createUser(this.addForm.value)
    //   .subscribe(data =>{
    //     this.router.navigate(['traineedashboard']);
    //   });

    //   console.log(this.trainees);
    //   this.submitted=true;
    //   if(this.addForm.invalid){
    //     return;
    //   }  
    //   this.TrainingService.CreateUser(this.addForm.value)
    //     .subscribe(data =>{
    //       this.router.navigate(['traineedashboard']);
    //     });

    //     this.submitted=true;
    // if(this.addForm.invalid){
    //   return;
    // }
    this.TrainingService.createuser(this.addForm.value)
    .subscribe(date =>{
      this.router.navigate(['traineedashboard']);
    });
    }

    // OnSubmit(){
    //   // console.log(this.trainees);
    //   // this.submitted=true;
    //   // if(this.addForm.invalid){
    //   //   return;
    //   // }  
    //   // this.TrainingService.CreateUser(this.addForm.value)
    //   //   .subscribe(data =>{
    //   //     this.router.navigate(['traineedashboard']);
    //   //   });
    //   }


  // courseNumbers() {
  //   console.log("inside deptNos()")
  //   this.courseSer.getCourseNumbers().subscribe(
  //     data => {
  //       this.courseList = data;
  //       console.log("in course-list  " + this.courseList)
  //     }
  //   )
  // }

  // traineeNumbers() {
  //   console.log("inside deptNos()")
  //   this.traineeser.getTraineeNumbers().subscribe(
  //     data => {
  //       this.traineeList = data;
  //       console.log("in trainee-list  " + this.traineeList)
  //     }
  //   )
  // }
}