class student{
  constructor (name,age){
    this.name = name;
    this.age = age
  }
displaydetail(course,sem){
  console.log("Name: "+this.name);
  console.log("Age: "+this.age);
  console.log("Course: "+course);
  console.log("Semester: "+sem);
}
}
const student1 = new student("John",18);
student1.displaydetail("CSE",4);
