import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseService } from './course/course.service';
import { NavComponent } from './nav/nav.component';
import { RoutingModule } from './routing.module';
import { RegComponent } from './reg/reg.component';
import { StudentService } from './reg/student.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavComponent,
    RegComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule, 
    FormsModule,
    RoutingModule,
    HttpModule
    
  ],
  providers: [CourseService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
