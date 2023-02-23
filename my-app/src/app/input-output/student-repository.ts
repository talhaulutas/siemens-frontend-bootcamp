import { Injectable } from "@angular/core";
import { Student } from "./models/student";

@Injectable({
    providedIn: 'root',
  })
export class StudentRepository {
    private studentList: Student[] = [];
    load() {
        this.studentList.push(
            {
                id: 1,
                name: "ahmet",
                surname: "yıldız",
                grade: 70
            }
        );
        this.studentList.push(
            {
                id: 2,
                name: "mehmet",
                surname: "yılmaz",
                grade: 80
            }
        );
    }
    constructor() {
        this.load();
    }
    getList(): ReadonlyArray<Student> {
        return this.studentList as ReadonlyArray<Student>;
    }

    getById(id: number) {
        return this.studentList.find((x) => x.id == id);
    }

    add(newStudent: Student) {
        this.studentList.push(newStudent);
    }
    update(updateStudent: Student) {
        let studentIndexToUpdate = this.studentList.findIndex(
            (x) => x.id == updateStudent.id
        );

        this.studentList[studentIndexToUpdate].name = updateStudent.name;
        this.studentList[studentIndexToUpdate].surname = updateStudent.surname;
        this.studentList[studentIndexToUpdate].grade = updateStudent.grade;
    }
    delete(id: number) {
        //1.way
        this.studentList = this.studentList.filter((x) => x.id != id);
    }
}
