import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IStudents } from './Student';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoFetchService {

  constructor(private http:HttpClient) { }
  private _url:string = "/assets/Data/StudentInfo.json";

  GetStudentDetails():Observable<IStudents[]>
  {
    return this.http.get<IStudents[]>(this._url);
  }
}


