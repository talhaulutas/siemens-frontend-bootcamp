import { Student } from "./models/student";

export class StudentRepository {
    private studentList:Student[]=[];
    load() {
        this.studentList.push({
          id: 1,
          name: "ahmet",
          surname:"yıldız",
          grade:74     
        });
      }
      constructor() {
        this.load();
      }
    
      getList(): ReadonlyArray<Student> {
        return this.studentList as ReadonlyArray<Student>;
      }
      getBySurname(surname:string)
      {
        return this.studentList.find(x=>x.surname == surname);
      }
      sortByGrade()
      {
        return this.studentList.sort(x=>(x.grade));
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
}
