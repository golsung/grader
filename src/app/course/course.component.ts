import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from './course.service';
import { Course } from './course';
import { RequestOptions, Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  selectedCourse: Course = null;
  allCourses: Course[];
  courseIdToUpdate = null;
  statusCode: number;
    //Create form
  courseForm = new FormGroup({
      id: new FormControl(0),
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      overview: new FormControl('', Validators.required)	   
  });
  constructor(private courseService: CourseService) {}

  title = '학생 등록';
  course: Course;


  ngOnInit() {
    this.getAllCourses();
  }

  onReg() {

    // this.statusCode = 0;
    let code = this.courseForm.get('code').value.trim();
    let name = this.courseForm.get('name').value.trim();
    let overview = this.courseForm.get('overview').value.trim();
  

    if (this.courseIdToUpdate === null) {
      let course = new Course(0, code, name, overview);
      this.courseService.addCourse(course)
        .subscribe(successCode => {this.statusCode = successCode; this.getAllCourses();},
        errorCode => this.statusCode = errorCode);
      }
     else {
      let course = new Course(this.courseIdToUpdate, code, name, overview);
      this.courseService.updateCourse(course)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllCourses();
          this.courseIdToUpdate = null;
        },
        errorCode => this.statusCode = errorCode);
    }
    this.reset();
  }

  studentRegistration(course: Course) {
    this.selectedCourse = course;
    alert(this.selectedCourse.name);
  }

  resetAndDisplayList() {

  }

  getAllCourses() {
    this.courseService.getAllCourses()
    .subscribe(data => this.allCourses = data );
            // .then(data => this.allCourses = data );
  }

  loadCourseToEdit(id: number) {
    this.courseService.getCourseById(id).subscribe( course => {
                this.courseIdToUpdate = course.id;   
                this.courseForm.setValue({ id: course.id, code: course.code, name: course.name, overview: course.overview});
            }                           
    );
    this.statusCode = 0;
  }
  deleteCourse(id: number) {
    this.courseService.deleteCourseById(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllCourses();	
        this.backToCreateCourse();
     },
     errorCode => this.statusCode = errorCode);    
 }

 backToCreateCourse() {
  this.courseIdToUpdate = null;
  this.courseForm.reset();
}

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

  // private handleError(error: any): Promise<any> {
  //   alert(error.status);
  //   return Promise.reject(error);
  // }

  private reset() {
    this.courseForm.reset();
    // this.courseForm.setValue({ id: 0, code: '',  name: '', overview: ''})
  }

  cancel() {
    this.statusCode = 0;
  }


}
