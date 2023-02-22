namespace srpG
{
    class Student
    {
        id:number;
        name:string;
        surname:string;
    }
    class StudentRepository
    {
        studentList:Student[]=[];
        add(student:Student)
        {
            this.studentList.push(student);
        }
    }
    class Presenter
    {
        writeToConsole(studentList:Student[])
        {
            studentList.forEach(x=>{
                console.log(x);
            })
        }
    }
}