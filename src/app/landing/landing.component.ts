import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  productData: any[] = [];

  selectedData: any[] = [];

  constructor(private sharedService: SharedService) {

    this.generateData();

  }

  generateData() {

    const users = this.sharedService.fakeData()
    this.productData = users;
  }

  addToCart(product: any) {

    const local = localStorage.getItem('Cart') as string;
  
    if (local === null) {
      this.selectedData = [product]; 

      localStorage.setItem('Cart', JSON.stringify(this.selectedData));

      window.alert(`${product?.product} added to cart, check cart page`);

    } else {

      const cart = JSON.parse(local);
      this.selectedData = cart;
  
      this.selectedData.push(product);
      localStorage.setItem('Cart', JSON.stringify(this.selectedData));

      window.alert(`${product?.product} added to cart, check cart page`);
    }
  }
  


}
