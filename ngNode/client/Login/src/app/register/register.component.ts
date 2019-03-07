import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../model/user-model';
import { TodbService } from '../service/todb.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: UserModel;
  @ViewChild('f') signupForm: NgForm;

  constructor(private todbService: TodbService) {
   }

  ngOnInit() {
  } 
  onSubmit(){
    this.userData={
      userName:  this.signupForm.value.username,
      email: this.signupForm.value.email,
      phone: this.signupForm.value.phone
    }
    this.todbService.setToDataBace(this.userData).subscribe(successRes => {
    },errorRes => {

    });
    console.log(this.signupForm);
    
  }
}
