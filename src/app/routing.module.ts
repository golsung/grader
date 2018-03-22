import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent
  },
  {
    path: 'course-reg',
    component: CourseComponent
  },
  {
    path: '**',
    component: NavComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
