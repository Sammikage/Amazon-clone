import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkoutsubtotal',
  templateUrl: './checkoutsubtotal.component.html',
  styleUrls: ['./checkoutsubtotal.component.css']
})
export class CheckoutsubtotalComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
