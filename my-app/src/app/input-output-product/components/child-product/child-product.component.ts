import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent {
  selectedID:number | undefined;
  @Input() productList:ReadonlyArray<Product> | undefined;
  @Output() detailShowClick = new EventEmitter<number>();
  showDetail(id:number)
  {
    this.selectedID=id;
    this.detailShowClick.emit(id);
  }
  highlightRow(productID:number)
  {
    return this.selectedID==productID;
  }
}
