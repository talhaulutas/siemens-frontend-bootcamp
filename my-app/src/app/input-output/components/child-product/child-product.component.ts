import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent {
  @Input() selectedId:number  | undefined;
  @Input() studentList: 

  ReadonlyArray<Student> | undefined;
  @Output() detailShowClick = new EventEmitter<number>();
  

  showDetail(id: number) {
    this.selectedId = id;
    this.detailShowClick.emit(this.selectedId);
  }
  highlightRow(studentId: number) {
    return this.selectedId == studentId;
  }
  

}
