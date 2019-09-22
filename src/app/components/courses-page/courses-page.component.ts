import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.sass']
})
export class CoursesPageComponent implements OnInit {
  courses: Course[];
  showSpinner = true;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(res => {
      this.courses = res;
      this.showSpinner = false;
    });
  }

  sort(sortValue): void {
    if (sortValue === "price") {
      this.courses = this.courses.sort((a: Course, b: Course) => {
        return a.price - b.price;
      });
    } else if (sortValue === "level") {
      this.courses = this.courses.sort((a: Course, b: Course): number => {
        return a.level - b.level;
      });
    }
  }

  search(searchValue) {
    this.showSpinner = true;
    this.courseService.getCourses()
      .pipe(
        map(courses => {
          if(searchValue === ''){
            return courses;
          }else{
            return courses.filter(course => course.title.toLowerCase().includes(searchValue) || course.describtion.toLowerCase().includes(searchValue));
          }
        })
      )
      .subscribe(res => {
        this.courses = res;
        this.showSpinner = false;
      });
  }

}
