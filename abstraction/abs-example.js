var Student = /** @class */ (function () {
    function Student(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
    return Student;
}());
var StudentRepository = /** @class */ (function () {
    function StudentRepository() {
    }
    StudentRepository.prototype.GetStudents = function () {
        // sql server
        var productList = [];
        productList.push(new Student(1, "ahmet", 64));
        productList.push(new Student(2, "mehmet", 48));
        productList.push(new Student(3, "hasan", 52));
        return productList;
    };
    return StudentRepository;
}());
var StudentRepositoryWithSQL = /** @class */ (function () {
    function StudentRepositoryWithSQL() {
    }
    StudentRepositoryWithSQL.prototype.GetStudents = function () {
        var studentList = [];
        studentList.push(new Student(1, "eda", 100));
        studentList.push(new Student(2, "mert", 75));
        studentList.push(new Student(3, "burcu", 95));
        return studentList;
    };
    return StudentRepositoryWithSQL;
}());
var StudentService = /** @class */ (function () {
    function StudentService(productRepository) {
        this._productRepository = productRepository;
    }
    StudentService.prototype.GetStudents = function () {
        var newStudentList = [];
        this._productRepository.GetStudents().forEach(function (x) {
            newStudentList.push(new Student(x.id, x.name, x.grade));
        });
        return newStudentList;
    };
    return StudentService;
}());
var StudentFactory = /** @class */ (function () {
    function StudentFactory() {
    }
    StudentFactory.prototype.CreateRepository = function () {
        return new StudentRepository();
    };
    StudentFactory.prototype.CreateRepositoryWithOracle = function () {
        return new StudentRepositoryWithSQL();
    };
    return StudentFactory;
}());
var studentService = new StudentService(new StudentFactory().CreateRepository());
studentService.GetStudents().forEach(function (x) {
    console.log("".concat(x.id, " ").concat(x.name, " ").concat(x.grade));
});
