import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[];

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }

  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items();
  }

  deleteEventHandler(p){
    this.getShoppingCart();
  }

}
