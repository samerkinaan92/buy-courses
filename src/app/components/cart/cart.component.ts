import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit, OnDestroy {

  cartIdsSubscribtion: Subscription;
  cartIds: string[];
  cart: Course[] = [];
  sum: number = 0;

  constructor(private cartService: CartService, private courseService: CourseService) { }

  ngOnInit(): void {
    //subscribes to get cart ids array and listens for changes
    this.cartIdsSubscribtion = this.cartService.getCart().subscribe(ids => {
      this.cartIds = ids;
      this.loadCart();
    });
  }

  ngOnDestroy(): void {
    this.cartIdsSubscribtion.unsubscribe();
  }

  //loads courses data
  loadCart(): void {
    this.cart = [];
    this.sum = 0;
    this.cartIds.forEach(id => {
      this.courseService.getCourse(id).subscribe(res => {
        this.cart.push(res);
        this.sum += res.price;
      })
    });
  }

}
