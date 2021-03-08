import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, Input, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'node:events';
//import { EventEmitter } from 'events'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkproducts',
  templateUrl: './checkproducts.component.html',
  styleUrls: ['./checkproducts.component.css']
})
export class CheckproductsComponent implements OnInit {
  @Input() checkout_products: any [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products', this.checkout_products)
  }

  removeItem(p){
    this.shopping_cart_service.removerItem(p);
    this.deleteEvent.emit(p)
  }

}
