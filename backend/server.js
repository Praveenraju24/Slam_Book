import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const exp=express();

mongoose.connect(process.env.MONGO_URL+"/"+process.env.DB_NAME,{useNewUrlParser:true, useUnifiedTopology: true})

const schema=new mongoose.Schema({
    nam:String,
    home:String,
    email:String,
    born:String,
    int:String,
    teacher:String,
    dream:String,
    visit:String,
    strength:String,
    life:String,
    name:String,
    mem:String,
    date:String  
})

const schema1=new mongoose.Schema({
    email:String,
    password:String
})

const data=mongoose.model("data",schema);
const credentials=mongoose.model("credentials",schema1);

exp.use(cors());

exp.use(express.json())


     

exp.post("/insert",(req,res)=>{

    credentials.insertMany([
        {
            email:req.body.mail,
            password:req.body.pass
        }
    ])
    res.send({ans:"success"});
})

exp.post("/new",(req,res)=>{
   
    reset()
    async function reset(){
        const ans=await credentials.findOneAndUpdate({email:req.body.mail},  { password:req.body.pass },{new:true});
        
        if(ans===null)
        res.send({ack:"failure"});
        else
        res.send({ack:"success"});
        
    }
})
exp.post("/data",(req,res)=>{
  
     finding()
     async function finding(){
       
       const query= await credentials.findOne({email : req.body.email });
       res.send(query);
     }
})
exp.post("/add",(req,res)=>{
     data.insertMany([{
        nam:req.body.nam,
        home:req.body.home,
        email:req.body.email,
        born:req.body.born,
        int:req.body.int,
        teacher:req.body.teacher,
        dream:req.body.dream,
        visit:req.body.visit,
        strength:req.body.strength,
        life:req.body.life,
        name:req.body.name,
        mem:req.body.mem,
        date:req.body.date
     }])
})

exp.get("/getItems",(req,res)=>{

  
    
    test();

    async function test(){
        const new_arr=[];
        const arr = await data.find();
        
        for(var i=0;i<arr.length;i++)
        {
            var obj={
                nam:arr[i].nam,
                home:arr[i].home,
                email:arr[i].email,
                born:arr[i].born,
                int:arr[i].int,
                teacher:arr[i].teacher,
                dream:arr[i].dream,
                visit:arr[i].visit,
                strength:arr[i].strength,
                life:arr[i].life,
                nick:arr[i].nick,
                name:arr[i].name,
                mem:arr[i].mem,
                date:arr[i].date
            }
            new_arr.push(obj);
        }
        res.send(new_arr);
    }
})
exp.listen(3000,()=>console.log("running"));