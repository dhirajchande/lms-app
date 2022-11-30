import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../servies/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseId:any;
  courseObject:any;

  constructor(private router:ActivatedRoute, private cs: CoursesService){
    router.params.subscribe(data=>{
      this.courseId=data['id'];

      this.cs.loadById(this.courseId).subscribe((data:any)=>{
        this.courseObject=data[0];

      })
    })
  
  }
  ngOnInit(): void {
    
  }




}
