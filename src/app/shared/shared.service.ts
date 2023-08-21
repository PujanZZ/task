import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedData: any;

  setData(data: any) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }

  fakeData() {
    const users = new Array(5).fill(null).map(() => {
      return {
        product     : faker.commerce.product(),
        description : faker.commerce.productDescription(),
        price       : faker.commerce.price()
      };
    });

    return users;
  }
}
