import React from "react";
import { useNavigate } from "react-router-dom";
const styles={
    height:"500px",
    width:"100%",
    backgroundColor:"brown",
    fontSize:"50px",
    textAlign:"center"
}
export default function Error(){
    const navigate=useNavigate();
    function handleError()
    {
         navigate("/",{replace:true});
    }

    return <div style={styles}>
       <p>Incorrect password or Email </p>
       <br></br>
       <img src="https://thumbs.dreamstime.com/b/man-encouraging-someone-message-written-card-holding-which-try-again-166496369.jpg" width={"300px"} height={"300px"} alt="Try again"></img>
       <button onClick={handleError}>Try Again</button>
    </div>;
}