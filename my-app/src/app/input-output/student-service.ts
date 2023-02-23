import { Injectable } from "@angular/core";
import { Student } from "./models/student";
import { StudentRepository } from "./student-repository";
@Injectable({
  providedIn: 'root',
})
export class studentService {
    constructor(private studentRepository:StudentRepository){}
    getAll(): ReadonlyArray<Student> {
        let studentList: Student[] = [];
    
        this.studentRepository.getList().forEach((s) => {
          studentList.push({
            id: s.id,
            name: s.name.toUpperCase(),
            surname:s.surname.toUpperCase(),
            grade:s.grade

          });
        });
    
        return studentList as ReadonlyArray<Student>;
      }
    
      getById(id: number): Student | undefined {
        return this.studentRepository.getById(id);
      }
    
      add(student: Student) {
        this.studentRepository.add(student);
      }
    
      update(student: Student) {
        this.studentRepository.update(student);
      }
      delete(id: number) {
        this.studentRepository.delete(id);
      }

}
