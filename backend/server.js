import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const exp = express();

mongoose.connect(process.env.MONGO_URL + "/" + process.env.DB_NAME+"?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connected..........')
}).catch((err) => {
    console.log('Database not connected')
    console.log('Database error: ', err)
})

const schema = new mongoose.Schema({
    nam: String,
    home: String,
    email: String,
    born: String,
    int: String,
    teacher: String,
    dream: String,
    visit: String,
    strength: String,
    life: String,
    name: String,
    mem: String,
    date: String
})

const schema1 = new mongoose.Schema({
    email: String,
    password: String
})

const data = mongoose.model(process.env.DB_COLLECTION1, schema);
const credentials = mongoose.model(process.env.DB_COLLECTION2, schema1);

exp.use(cors());

exp.use(express.json())




exp.post("/insert", (req, res) => {
    insert();
    async function insert() {

        await credentials.findOne({ email: req.body.mail }).then(data => {
            var str1 = "success";
            if (data !== null)
                str1 = "failure";
            if (str1 === "success") {
                credentials.insertMany([
                    {
                        email: req.body.mail,
                        password: req.body.pass
                    }
                ])
            }
            res.send({ ans: str1 });
        });


    }
})

exp.post("/new", (req, res) => {

    reset();
    async function reset() {
        await credentials.findOneAndUpdate({ email: req.body.mail }, { password: req.body.pass }, { new: true }).then(data => {
            var str2 = "success";
            if (data === null)
                str2 = "failure";

            res.send({ ack: str2 });
        }).catch(err => {
            console.log(err);
        })


    }
})
exp.post("/data", (req, res) => {

    finding()
    async function finding() {

        await credentials.findOne({ email: req.body.email }).then(data => {
            var str = "success";
            if (data === null)
                str = "failure";
            res.send({ we: str });
        }).catch(err => {
            console.log(err)
        });

    }
})
exp.post("/add", (req, res) => {
    data.insertMany([{
        nam: req.body.nam,
        home: req.body.home,
        email: req.body.email,
        born: req.body.born,
        int: req.body.int,
        teacher: req.body.teacher,
        dream: req.body.dream,
        visit: req.body.visit,
        strength: req.body.strength,
        life: req.body.life,
        name: req.body.name,
        mem: req.body.mem,
        date: req.body.date
    }])
})

exp.get("/getItems", (req, res) => {



    test();

    async function test() {
        const new_arr = [];
        const arr = await data.find().then(data => {
            return data
        }).catch(err => console.log(err));

        for (var i = 0; i < arr.length; i++) {
            var obj = {
                nam: arr[i].nam,
                home: arr[i].home,
                email: arr[i].email,
                born: arr[i].born,
                int: arr[i].int,
                teacher: arr[i].teacher,
                dream: arr[i].dream,
                visit: arr[i].visit,
                strength: arr[i].strength,
                life: arr[i].life,
                nick: arr[i].nick,
                name: arr[i].name,
                mem: arr[i].mem,
                date: arr[i].date
            }
            new_arr.push(obj);
        }
        res.send(new_arr);
    }
})
exp.listen(process.env.PORT, () => console.log("running at 8000"));