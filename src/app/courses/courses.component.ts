import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../servies/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
courses:any;


constructor(private cs:CoursesService){}


  ngOnInit(): void {
    this.cs.getCourses().subscribe(data=>{
      this.courses=data;
    })
  }

}
