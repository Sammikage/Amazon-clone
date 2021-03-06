import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shopping_cart_items: any[]=[];
  //@Input() products: any [];
  //public roles = new Array<any>()

  constructor() { }

  addProduct = (product) => {
    let items = this.get_shopping_cart_items();
    if(items){
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    }else{
      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }
    //localStorage.setItem('shopping_cart', JSON.stringify(product))
  }

  /*get_shopping_cart_items() {
    return this.shopping_cart_items);
  }*/

  get_shopping_cart_items=()=>{
    let items = localStorage.getItem('shopping_cart')
    return JSON.parse(items);
    //return JSON.parse(JSON.stringify(items))
  }

  getCartLength=()=>{
    let items = this.get_shopping_cart_items();
    return items? this.get_shopping_cart_items().length: 0
    //console.log(items)
  }

  getTotal= () =>{
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc, item)=> acc+ item.price, 0)
  }

  removerItem=(p)=>{
    let items = this.get_shopping_cart_items();
    const index = items.findIndex(item=> item.id == p.id)
    if(index >=0){
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }
  }
  
}
