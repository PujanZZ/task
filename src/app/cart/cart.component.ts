import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  shared: any[] = [];

  totalAmt!: number;

  constructor(private sharedService: SharedService) {

    this.retrieveItem()
  }

  calculateTotal(): number {

    return this.shared.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
  }

  retrieveItem() {

    const data = localStorage.getItem('Cart') as string
    const cart = JSON.parse(data)

    this.shared = cart;
  }

  remoteItem(element: any, index: number) {

    this.shared.splice(index,1);
    localStorage.setItem('Cart', JSON.stringify(this.shared));

  }


}
