import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Course } from './course';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CourseService {
//URLs for CRUD operations
allCoursesUrl = "http://localhost:8080/courses/";
addCourseUrl = "http://localhost:8080/courses/add";
courseUrl = `http://localhost:8080/courses/`;

  constructor(private http:Http) { }

  getAllCourses() : Observable<Course[]> {
    return this.http.get( this.allCoursesUrl).map(res => res.json() as Course[]).catch(this.handleError);
    // return this.http.get( this.allCoursesUrl)
    //                               .toPromise()
    //                               .then(res => res.json() as Course[])
    //                               .catch(this.handleError);
  }


  addCourse(course: Course): Observable<number> {
    return this.http.post(this.addCourseUrl, course).map(success => success.status).catch(this.handleError);
      // .toPromise()
      // .then(res => res.json())
      // .catch(this.handleError);
  }

  updateCourse(course: Course):Observable<number> {
          return this.http.put(this.courseUrl+`${course.id}`, course)
                 .map(success => success.status)
                 .catch(this.handleError);
      }

  getCourseById(id: number): Observable<Course> {
    return this.http.get(this.courseUrl+`${id}`).map(res => res.json() as Course).catch(this.handleError);
  }

  deleteCourseById(id: number): Observable<number> {			
    return this.http.delete(this.courseUrl+`${id}`)
           .map(success => success.status)
           .catch(this.handleError);
      }	

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
    // private handleError(error: any): Promise<any> {
    //   alert(error.status);
    //   return Promise.reject(error);
    // }

}
