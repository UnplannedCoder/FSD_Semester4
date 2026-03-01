import React, {useState} from "react";
import CourseList from "./CourseList";
import StudentClass from "./StudentClass";
import StudentFunctional from "./StudentFunctional";

function App() {
  const [showCourse, setShowCourse] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  return (
    <div style={{padding: "20px"}}>
      <h1>React Mount and Unmount Example</h1>

      <button onClick={() => setShowCourse(!showCourse)}>Toggle Course List</button>
      <br></br>
      <button onClick={() => setShowStudent(!showStudent)}>Toggle Student List</button>

      <hr/>

      {/* Mount / Unmount CourseList */ }
      {showCourse && <CourseList />}

      {/* Mount / Unmount StudentClass */}
      {showStudent && <StudentClass />}

      {/* Mount / Unmount StudentFunctional */}
      <StudentFunctional />
    </div>
  );
}
export default App;