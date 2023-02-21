namespace srpB
{
    class Student
    {
        id:number;
        name:string;
        surname:string;
        studentList:Student[]=[];
        add(student:Student)
        {
            this.studentList.push(student);
        }
        writeToConsole(studentList:Student[])
        {
            studentList.forEach(x=>{
                console.log(x);
            })
        }
    }


}