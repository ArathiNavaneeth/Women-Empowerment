import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { TraineeloginService} from '../traineelogin.service';
import { Trainee } from '../Trainee';

@Component({
  selector: 'app-traineelogin',
  templateUrl: './traineelogin.component.html',
  styleUrls: ['./traineelogin.component.css']
})
export class TraineeloginComponent implements OnInit {

  loginList: Trainee[]=[];
  hide:boolean=false;

  loginForm: FormGroup;
   submitted: boolean = false;										
    invalidLogin: boolean = false;										
                      
    constructor(private empSer:TraineeloginService, private formBuilder: FormBuilder, private router: Router) { }										
                      
    onSubmit(){										
      this.submitted = true;										
      if(this.loginForm.invalid){										
        return;										
      }	
      console.log(this.loginList[0].fullName);
      for(let i=0;i<this.loginList.length;i++){
        if(this.loginForm.controls.fullName.value == this.loginList[i].fullName &&
          this.loginForm.controls.password.value == this.loginList[i].password){
            localStorage.setItem("username",this.loginForm.controls.fullName.value);
            this.router.navigate(['traineedashboard']);

        }										
        else{										
          this.invalidLogin = true;		
          console.log("loginvalid");
        }	
            
      }
    }	
      																		
                      
    ngOnInit() {
    this.getLoginList();	   
      this.loginForm = this.formBuilder.group({										
        fullName : ['', Validators.required],										
        password: ['', Validators.required]										
      });										
                      
    }
  
  getLoginList(){
    this.empSer.getTraineeList().subscribe
    (data=>{
      this.loginList=data;
      console.log('inside login list'+this.loginList);

    })
   
  }
}
