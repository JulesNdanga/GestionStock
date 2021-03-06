import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  
  
  private products:Array<Product> = [];

  constructor() { 
    this.products.push();
  }

  public getProducts(){
    return this.products;
  }

  public addProduct(p:Product){
    this.products.push(p);
    return this.products;
  }

  private removeProduct(p: Product) {
    let index=this.products.indexOf(p);
    this.products.splice(index,1);
  }

  public getProduct(ref:string) {
    return this.products.filter(item => item.reference === ref)[0];
  }

  private updateProduct(p: Product) {
  }
}
