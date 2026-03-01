import React, { useState } from 'react';
import InfoCard from "./InfoCard";
function TaskManager() {
    const [task,setTask] = useState("Complete React lab");
    const updateTask = () =>{
        setTask("Prepare Advanced React Notes");
    };
    return (
        <div style={{
            border:"5px solid black",
            padding:"15px",
            margin:"5px",
            borderRadius:"8px",
            backgroundColor:"cyan",
            width:"300px"
        }}>
        {<InfoCard title="Task Manager" content={`Current Task: ${task}`} />}
        <button onClick={updateTask} style={{fontSize:"20px",padding:"10px 20px",marginTop:"10px", }}>Update Task</button>
        </div>
    );
}

export default TaskManager;