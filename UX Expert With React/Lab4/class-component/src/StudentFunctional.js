import React, {useEffect} from 'react';
function StudentFunctional() {
    useEffect(() => {
        console.log("Functional Component Mounted");
        return () => {
            console.log("Functional Component Unmounted");
        };
    },[]);
    const students = [
        {name:"Alice",age: 19},
        {name:"Bob",age: 22},
        {name:"Charlie",age: 21},
    ];
    return (
        <div>
            <h3>Student List (Functional Component)</h3>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.name} - {student.age} years</li>
                ))}
            </ul>
        </div>
    );
}
export default StudentFunctional;
