import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Course } from '../course/course';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from './student.service';
import { Student } from './student';
import { RequestOptions, Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  
  // @Output() OnRegisterDone = new EventEmitter<string>();
  // _selectedCourse: Course = null;

  @Input('course') _selectedCourse: Course;
  // set course(selectedCourse: Course) {
  //   this._selectedCourse = selectedCourse;
  // }
  newStudent: Student;
  statusCode: number = null;
  studentForm = new FormGroup({
    id: new FormControl(0),
    sid: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)	   
});

  // constructor() {}
  constructor( private studentService: StudentService) {
  }
  ngOnInit() {
   
  }

  OnRegStudent() {
    let sid = this.studentForm.get('sid').value.trim();
    let name = this.studentForm.get('name').value.trim();
    let email = this.studentForm.get('email').value.trim();
 
   this.newStudent = new Student(0, sid, name, email);
    this.studentService.addNewStudent(this._selectedCourse.id, this.newStudent)
        .subscribe(successCode => {this.statusCode = successCode;},
        errorCode => this.statusCode = errorCode);
  // }
  }

}
