import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class StudentService {

  courseUrl = "http://localhost:8080/courses/";


  constructor(private http:Http) { }

  addNewStudent(courseId: number, student: Student): Observable<number>{
    // let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	  let cpParams = new URLSearchParams();
    cpParams.set('sid', student.sid);		
    cpParams.set('name', student.name);	
    cpParams.set('email', student.email);				
    alert(student.name);
	  let options = new RequestOptions({ params: cpParams });

    return this.http.get(this.courseUrl+`${courseId}`+`/addstudent`, options)
              .map(success => success.status)
              .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
