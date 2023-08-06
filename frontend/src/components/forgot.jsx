import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";



const obj={
    height:"270px",
    width:"250px",
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


export default function Forgot()
{    
    const navigator= useNavigate();

    const [sign,setSign]=useState({
        mail:"",
        pass:""
    });

    function handlesign(event)
    {   const {name,value}=event.target;
        setSign(prev =>{
             return {
                ...prev,
                [name]:value
             }
        })
    }

    async function handleForgot()
     {   
        const obj4=sign;
        setSign({
            mail:"",
            pass:""
         })
      
        const cred= await axios.post("https://raju-dairies.onrender.com/new",obj4);
      
         if(cred.data.ack==="failure"){
            alert("Your Email not found Kindly Signup");
            navigator("/",{replace:true});
         }
        else
        {
            
            alert("Your Password is successfully changed kindly Visit Slam book");
            navigator("/signin",{replace:true});
        }
        
     }

     function myFunction()
     {
         var x=document.getElementById("show");
 
         if(x.type==="password")
         x.type="text";
         else
         x.type="password";
     }

    return <center> 
            <div style={obj2}>
                <h3 >Welcome to Raju's Slam Book</h3>
            </div>
            <div style={obj}>
            <h2 style={{ fontStyle:"italic",
    fontFamily:"cursive"}}>Reset Your Password</h2>
            <br></br>
            <input     placeholder="Enter Your email" name="mail" type="email" onChange={handlesign} value={sign.mail}></input>
            <br></br>
            <input placeholder="Enter new password" name="pass" style={{marginLeft:"33px"}} id="show" type="password" onChange={handlesign} value={sign.pass}></input>
            <input type="checkbox" onClick={myFunction}></input>
             <button style={obj3} onClick={handleForgot}>submit</button>
            
         </div>
     </center>;
}