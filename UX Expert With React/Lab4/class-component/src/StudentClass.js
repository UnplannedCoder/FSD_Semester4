import React, { Component } from 'react';
class StudentClass extends Component {
    componentDidMount(){
        console.log("StudentClass component mounted");
    }
    componentWillUnmount(){
        console.log("StudentClass component will unmount");
    }
    render() {
        const students = [
            {name: "Yash", age: 20},
            {name: "Bob", age: 22},
            {name: "Charlie", age: 21},
        ];
        return (
            <div>
                <h3>Student List (Class Component)</h3>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>{student.name} - {student.age} years</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default StudentClass;