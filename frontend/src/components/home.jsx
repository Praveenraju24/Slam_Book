import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const obj={
    height:"300px",
    width:"270px",
    backgroundColor:"#FBD85D",
    justifyContent:"center",
    margin:"50px",
    paddingTop:"30px",
    borderRadius:"10px",
    paddingRight:"10px"
}
const obj2={
    height:"50px",
    width:"100%",
    backgroundColor:"skyblue",
    color:"#DB005B",
    paddingTop:"10px",
    fontStyle:"italic",
    fontFamily:"fantasy"
}

const obj3={
    width:"100px" ,marginLeft:"15px",
   
}

const obj6={
   
    width:"100%",
    backgroundColor:"#FF2171",
    whiteSpace : "pre-wrap",
    wordWrap: "break-word",
    color:"white",
}

export default function Home(){
    


    const [joke,setJoke]=useState("");


    const navigate=useNavigate();
  
     const [data,setData]=useState({
        email:"",
        password:""
     })

    async function getJoke()
    {
        await axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => setJoke(response.data.joke))

    }

     React.useEffect(()=>{
          getJoke();
     },[])

     async function handlesignIn()
     {   
        const obj4=data;
        setData({
            email:"",
            password:""
         })
        const cred=await axios.post("https://raju-dairies.onrender.com/data",obj4);

         if(cred.data.we==="success")
         navigate("/signin",{replace:true});
         else
         navigate("/error",{replace:true});
        
     }
     function handleClick(event)
     {   const {name,value}=event.target
         setData(prev =>{
            return {
                ...prev,
                [name]:value
            }

         });
     }


     function handlesignUp()
     {
        navigate("/signup",{replace:true});
     }

     function handleForgot()
     {
        navigate("/forgot",{replace:true});
     }

     function myFunction()
    {
        var x=document.getElementById("show");

        if(x.type==="password")
        x.type="text";
        else
        x.type="password";
    }


     return<center> 
            <div style={obj2}>
                <h3>Welcome to Raju's Slam Book</h3>
            </div>
            <div style={obj6}>
                <h4>Refresh to get a new joke</h4>
                <br></br>
                <p style={{fontFamily:"monospace",fontStyle:"oblique"}}>{joke}</p>
            </div>
            <div style={obj}>
            <input   placeholder="Enter Your email" name="email" type="email" onChange={handleClick} value={data.email}></input>
            <br></br>
          
            <input placeholder="Enter Your password" style={{marginLeft:"33px"}} id="show" name="password" type="password" onChange={handleClick} value={data.password}></input>
            <input type="checkbox" onClick={myFunction}></input>
            <h6>if new user? then sign up</h6>
             <button style={obj3} onClick={handlesignIn}>sign in</button>
             <button  style={obj3} onClick={handlesignUp}>sign up</button>
             <button style={obj3} onClick={handleForgot}>Forgot Password</button>
     </div>
     </center>
}
