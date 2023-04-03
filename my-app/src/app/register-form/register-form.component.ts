import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(private formBuilder:FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    userName:['',[Validators.required]],
    userPassword:['',[Validators.required]],
    userDOB:['',[Validators.required]],
    userGender:['',[Validators.required]],
  });
 
  saveForm(){
    if(this.profileForm.valid){
      console.log('Profile form data is ', this.profileForm.value);
    }
  }
}
