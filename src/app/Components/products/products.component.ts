import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { ApiService } from './../../Services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: any[];

  constructor(private shopping: ShoppingCartService) { }

  ngOnInit(): void {
    
  }
  
  addToCart(p){
    this.shopping.addProduct(p)
  }

}
