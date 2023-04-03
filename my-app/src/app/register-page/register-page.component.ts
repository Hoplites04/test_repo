import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})


export class RegisterPageComponent {
  constructor(private http:HttpClient){}

  onSubmit(data:NgForm) {
    // TODO: Use EventEmitter with form value
    
    this.http.post('http://localhost:3000/users', data.value)
    .subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(data.value);
  }
}

