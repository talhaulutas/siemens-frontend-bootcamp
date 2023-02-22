import { Student } from "./models/student";
import { StudentRepository } from "./student-repository";

export class StudentService {
    constructor(private studentRepository:StudentRepository){}
    getById(id: number): Student | undefined {
        return this.studentRepository.getById(id);
      }
    
      add(student: Student) {
        this.studentRepository.add(student);
      }
    
      update(student: Student) {
        this.studentRepository.update(student);
      }
      getBySurname(surname:string){
        this.studentRepository.getBySurname(surname);
      }
      sortByGrade(){
        this.studentRepository.sortByGrade();
      }

}
