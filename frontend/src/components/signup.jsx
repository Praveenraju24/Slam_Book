import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";



const obj={
    height:"290px",
    width:"260px",
    backgroundColor:"white",
    justifyContent:"center",
    margin:"50px",
    paddingTop:"30px",
    borderRadius:"10px",
    paddingRight:"10px",
    boxShadow:"100px"
}
const obj2={
    height:"50px",
    width:"100%",
    backgroundColor:"#AFD3E2",
    color:"#DB005B",
    paddingTop:"10px",
    fontStyle:"italic",
    fontFamily:"fantasy"
}

const obj3={
    width:"100px" ,marginLeft:"15px"
}


export default function Signup()
{    
    const navigator= useNavigate();

    const [sign,setSign]=useState({
        mail:"",
        pass:""
    });

    function myFunction()
    {
        var x=document.getElementById("show");

        if(x.type==="password")
        x.type="text";
        else
        x.type="password";
    }

    function handlesign(event)
    {   const {name,value}=event.target;
        setSign(prev =>{
             return {
                ...prev,
                [name]:value
             }
        })
    }

    async function handleSubmit()
    {
        const obj5=sign;
        setSign({
            mail:"",
            pass:""
        })
        
        if(obj5.mail.endsWith("@gmail.com")){
        const  str= await axios.post("http://localhost:3000/insert",obj5);

        if(str.data.ans==="failure"){
            alert("Your email is already exist ,signin or choose forgot password");
            navigator("/",{replace:true});
        }

        if(str.data.ans==='success'){
            alert("Successfully Registered Kindly Remember Your credentials");
         navigator("/signin",{replace:true});
        }
       }
       else
         alert("your email is not in format ending with @gmail.com")
    }
    return <center> 
            <div style={obj2}>
                <h3 >Welcome to Raju's Slam Book</h3>
            </div>
            <div style={obj}>
            <h2 style={{ fontStyle:"italic",
    fontFamily:"cursive"}}>Signing Up</h2>
            <br></br>
            <input     placeholder="Enter Your email" name="mail" type="email" onChange={handlesign} value={sign.mail}></input>
            <br></br>
            <input style={{marginLeft:"32px"}}  placeholder="Enter Your password" name="pass" type="password" id="show" onChange={handlesign} value={sign.pass}></input>
         <input type="checkbox" onClick={myFunction}></input>
          
         <button style={obj3} onClick={handleSubmit}>submit</button>
            
         </div>
     </center>;
}