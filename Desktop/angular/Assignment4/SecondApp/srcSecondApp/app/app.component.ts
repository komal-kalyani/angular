import { Component } from '@angular/core';
import { StudentInfoFetchService } from './student-info-fetch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public student = [];
  constructor(private _studentservice: StudentInfoFetchService)
  {

  }
  fnStudentInfo()
  {
    this._studentservice.GetStudentDetails().subscribe(data=>this.student=data);
  }
}

