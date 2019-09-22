import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  //return courses array after 2 second
  private observalbe: Observable<Course[]> = new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next(this.courses);
      subscriber.complete();
    }, 2000);
  });

  constructor() { }

  //initial data
  private courses: Course[] = [{
    id: '0',
    title: 'Title One',
    describtion: 'Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.',
    price: 20,
    level: Level.Advanced,
    isAdded: false
  },
  {
    id: '1',
    title: 'Title Two',
    describtion: 'Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.',
    price: 15,
    level: Level.Intermediate,
    isAdded: false
  },
  {
    id: '2',
    title: 'Title Three',
    describtion: 'Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.',
    price: 11,
    level: Level.Beginner,
    isAdded: false
  },
  {
    id: '3',
    title: 'Title Four',
    describtion: 'Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.',
    price: 10,
    level: Level.Advanced,
    isAdded: false
  },
  {
    id: '4',
    title: 'Title Five',
    describtion: 'Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.',
    price: 10,
    level: Level.Beginner,
    isAdded: false
  }];


  //returns observable for courses list
  getCourses(): Observable<Course[]> {
    return this.observalbe;
  }

  //returns observable for course
  getCourse(id: string): Observable<Course> {
    return new Observable(subscriber => {
      const index = this.findIndex(id);
      if (index >= 0) {
        subscriber.next(this.courses[index]);
      }
      subscriber.complete();
    });
  }

  addCourseToCart(id: string): void {
    const index = this.findIndex(id);
    if (index >= 0) {
      this.courses[index].isAdded = true;
    }
  }

  removeCourseFromCart(id: string): void {
    const index = this.findIndex(id);
    if (index >= 0) {
      this.courses[index].isAdded = false;
    }
  }

  //returns course index in courses array for a given id
  private findIndex(id: string): number {
    return this.courses.findIndex(course => course.id === id);
  }

}
