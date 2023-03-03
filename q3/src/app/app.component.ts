import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newProduct: Product | undefined = undefined;
  productList:Product[] = [];
  constructor(private formBuilder:FormBuilder)
  {}
  public contactForm = this.formBuilder.group({
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    isTrue: new FormControl(),
  })
 
 
  onSubmit() {
    this.newProduct = this.contactForm.value as Product;
    this.productList.push(this.newProduct);
    console.log(this.newProduct);
  }
}
