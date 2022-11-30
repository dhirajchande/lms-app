import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCoursesComponent,
    CoursesComponent,
    CourseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
