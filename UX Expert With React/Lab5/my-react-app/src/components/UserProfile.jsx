import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';

function UserProfile() {
    const [user, setUser] = useState({
        name: "Pawan",
        role: "Cyber Security Analyst",
    });
    const [showInfo, setShowInfo] = useState(false);
    useEffect(() => {
        console.log("UserProfile Mounted");
        return () => {
            console.log("UserProfile Unmounted");
        };
    }, []);

    const updateUser = () => {
        setUser({
            name: "Pawan Sain",
            role: "Senior Cyber Security Analyst",
        });
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
            <h2>User Profile:</h2>
            <p><strong>Name:</strong> <b>{user.name}</b></p>
            <p><strong>Role:</strong> <b>{user.role}</b></p>
            <button onClick={updateUser} style={{fontSize:"16px",padding:"10px 20px",marginBottom:"10px"}}>Update Profile</button>
            <button onClick={() => setShowInfo(!showInfo)} style={{fontSize:"16px",padding:"10px 20px",marginLeft:"10px"}}>Toggle Info</button>
            {showInfo && (
                <InfoCard 
                    title="Additonal Info"
                    content = {`User ${user.name} works as ${user.role}`}
                />
            )}
        </div>
    );
}

export default UserProfile;