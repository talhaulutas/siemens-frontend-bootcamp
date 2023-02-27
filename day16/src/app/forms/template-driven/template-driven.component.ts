import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  newProduct?:Product=undefined;
  saveProduct(productForm:NgForm)
  {
    this.newProduct = productForm.value as Product;
    console.log(this.newProduct);
  }
  isInvalid(model:FormControl):boolean
  {
    if(!(model.invalid && (model.dirty || model.touched)))return false;
    if (model.errors?.['required']) return true;
    if (model.errors?.['minLength']) return true;
    if (model.errors?.['maxLength']) return true;
    return false;
  }
  isValid(model:FormControl)
  {
    return model.valid && (model.dirty || model.touched);
  }
}
