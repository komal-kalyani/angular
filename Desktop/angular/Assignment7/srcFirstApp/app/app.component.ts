import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  username:string;
  password:string;
  nForm:FormGroup;

  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
        {
      'name' : [null,Validators.required],
      'password' : [null,Validators.compose([Validators.required])],
      'validate': ''
        }
    )
  }

  addPost(value)
  {
    this.username = value.name;
    this.password = value.password;
    
    console.log(this.username);
    console.log(this.password);
  }
}


