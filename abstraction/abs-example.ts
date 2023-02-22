
class Student {
    id: number;
    name: string;
    grade: number;

    constructor(id: number, name: string, grade: number) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
}

class StudentRepository implements IStudentRepository {


    GetStudents(): Student[] {

        // sql server
        let productList: Student[] = [];
        productList.push(new Student(1, "ahmet", 64))
        productList.push(new Student(2, "mehmet", 48))
        productList.push(new Student(3, "hasan", 52))
        return productList;

    }


}

class StudentRepositoryWithSQL implements IStudentRepository
{

    GetStudents(): Student[] {
        let studentList: Student[] = [];
        studentList.push(new Student(1, "eda", 100))
        studentList.push(new Student(2, "mert", 75))
        studentList.push(new Student(3, "burcu", 95))
        return studentList;
    }
    
}

interface IStudentRepository {
    GetStudents(): Student[];
}



class StudentService {

    private _productRepository: IStudentRepository;
    constructor(productRepository:IStudentRepository) {

        this._productRepository = productRepository;
    }

    GetStudents(): Student[] {
        let newStudentList: Student[] = [];


        this._productRepository.GetStudents().forEach(x => {
            newStudentList.push(new Student(x.id, x.name, x.grade));

        })
        return newStudentList;
    }
}

class StudentFactory {

    public CreateRepository(): IStudentRepository {
        return new StudentRepository();
    }

    public CreateRepositoryWithOracle():IStudentRepository
    {
        return new StudentRepositoryWithSQL();
    }
}

var studentService = new StudentService(new StudentFactory().CreateRepository());
studentService.GetStudents().forEach(x => {
    console.log(`${x.id} ${x.name} ${x.grade}`)
})