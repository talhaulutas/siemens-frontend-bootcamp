import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-child-student-detail',
  templateUrl: './child-student-detail.component.html',
  styleUrls: ['./child-student-detail.component.css']
})
export class ChildStudentDetailComponent {
  @Input() selectedStudent:Student | undefined

}
