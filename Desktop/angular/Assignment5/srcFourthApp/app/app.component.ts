import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  // Add characterictics which are required in form
  nForm:FormGroup;
  
  post:any;
  
  college:String= '';
  
  name:string= '';

  // Use dependency injection for FormBuilder
  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
        {
      'name' : [null,Validators.compose([Validators.required, Validators.minLength(5)])],
      'college' : [null,Validators.compose([Validators.required,Validators.maxLength(7)])],
      'validate': ''
        }
    )
  }

  // Copy the data from html to our class characteristics
  addPost(my)
  {
    this.college = my.college;
    this.name = my.name;
    console.log(this.college);
    console.log(this.name);
  }
}
