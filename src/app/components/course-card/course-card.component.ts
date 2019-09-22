import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CartService } from 'src/app/services/cart.service';
import { Level } from '../../models/level';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass']
})
export class CourseCardComponent {

  @Input() course: Course;
  levelEnum = Level;

  constructor(private cartService: CartService) { }

  addToCart(): void {
    this.course.isAdded = true;
    this.cartService.addCourse(this.course.id);
  }

  removeFromCart(): void {
    this.course.isAdded = false;
    this.cartService.removeCourse(this.course.id);
  }
}
