import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: string[] = [];
  private cartSubject: BehaviorSubject<string[]> = new BehaviorSubject(this.cart);

  constructor(private courseService: CourseService) {
    this.loadLocalStorage();
  }

  addCourse(id: string): void {
    const index = this.cart.findIndex(cart => cart === id);
    if (index < 0) {
      this.cart.push(id);
      this.cartSubject.next(this.cart);
      localStorage.setItem('buy-courses-cart', JSON.stringify(this.cart));
    }
  }

  removeCourse(id: string): void {
    const index = this.cart.findIndex(cart => cart === id);
    if (index >= 0) {
      this.cart.splice(index, 1);
      this.cartSubject.next(this.cart);
      localStorage.setItem('buy-courses-cart', JSON.stringify(this.cart));
    }
  }

  getCart(): BehaviorSubject<string[]> {
    return this.cartSubject;
  }

  private loadLocalStorage(): void{
    const json: string = localStorage.getItem('buy-courses-cart');
    if (json) {
      this.cart = JSON.parse(localStorage.getItem('buy-courses-cart'));
      this.cartSubject.next(this.cart);
      this.cart.forEach(item => this.courseService.addCourseToCart(item));
    }
  }
}
