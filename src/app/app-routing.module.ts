import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';


const routes: Routes = [
  {path:"myCourses", component:MyCoursesComponent},
  {path:"courses", component:CoursesComponent},
  {path:"course/:id", component:CourseComponent},
  {path:"home", component:CoursesComponent},
  {path:"**", component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
