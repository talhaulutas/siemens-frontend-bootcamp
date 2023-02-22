import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealProductAPIService {

  constructor() { }
  save(name:string)
  {
    console.log("gerçek api yeni kayıt");
  }
  getAll():string[]
  {
    return ["fake ahmet","fake mehmet","fake hasan"];
  }
}
