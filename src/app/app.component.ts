import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  cartCountSub: Subscription;
  cartCount: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartCountSub = this.cartService.getCart().subscribe(cart => {
      this.cartCount = cart.length;
    });
  }
  ngOnDestroy(): void {
    this.cartCountSub.unsubscribe();
  }
}
