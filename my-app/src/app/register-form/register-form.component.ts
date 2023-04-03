import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(private formBuilder:FormBuilder, private http:HttpClient) {}
  
  registerForm = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    userName:['',[Validators.required]],
    userPassword:['',[Validators.required]],
    userDOB:['',[Validators.required]],
    userGender:['',[Validators.required]],
    phoneNumber:['',[Validators.required]]
  });
  saveForm(){
    if(this.registerForm.valid){
      console.log('register form data is ', this.registerForm.value);
      let data = JSON.stringify(this.registerForm.value);
    }
    this.http.post('http://localhost:80/admin2/receive.json', this.data.value)
    .subscribe((result) => {
      console.warn("result", result)
    })
  }
  deleteForm(){
    this.http.delete('http://localhost:3000/users/null').subscribe((result) => {
      console.warn("result", result)
    })
  }
}
