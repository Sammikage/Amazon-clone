import { AuthService } from './../../Services/auth.service';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.auth.logOut()
  }

}
