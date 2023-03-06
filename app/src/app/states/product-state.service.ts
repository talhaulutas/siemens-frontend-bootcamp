import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {

  public productList:Product[]=[];//sadece bu var ilk kısımda
  public productListObservable:Observable<Product[]>;
  private productListSubject:Subject<Product[]> = new Subject<Product[]>();
  constructor() 
  {
    this.productListObservable = this.productListSubject.asObservable();
  }
  add(newProduct:Product)
  {
    this.productList.push(newProduct);
  }
  isOk(id:number)
  {
    let productIndexToUpdate = this.productList.findIndex(x=>x.id == id);
    this.productList[productIndexToUpdate].isOk = !this.productList[productIndexToUpdate].isOk;
    this.productListSubject.next(this.productList);
  }
}
