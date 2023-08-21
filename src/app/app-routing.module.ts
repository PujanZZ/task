import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '' ,
    component : LandingComponent
  },
  {
    path: 'cart' ,
    component : CartComponent
  },
  {
    path: 'form' ,
    component : FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
