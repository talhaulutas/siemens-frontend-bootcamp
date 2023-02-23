import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Student } from '../../models/student';
import { ChildProductComponent } from '../child-product/child-product.component';

@Component({
  selector: 'app-child-student-detail',
  templateUrl: './child-student-detail.component.html',
  styleUrls: ['./child-student-detail.component.css']
})
export class ChildStudentDetailComponent {
  @Input() selectedStudent:Student | undefined;
  @Output() closeEventClick = new EventEmitter();

  close()
  {
    this.closeEventClick.emit();
  }
}
