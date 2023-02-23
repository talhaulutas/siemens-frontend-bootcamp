import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { studentService } from '../../student-service';

@Component({
  selector: 'app-parent-student',
  templateUrl: './parent-student.component.html',
  styleUrls: ['./parent-student.component.css']
})
export class ParentStudentComponent {
  studentList: ReadonlyArray<Student>;
  selectedStudent: Student | undefined;
  constructor(
    private studentService: studentService,
  ) {
    this.studentList = this.studentService.getAll();

    console.log(studentService.getAll());
  }

  get toggleStudentDetail() {
    return this.selectedStudent != undefined;
  }

  showDetail(studentId: number) {
    this.selectedStudent = this.studentService.getById(studentId);
  }
}
