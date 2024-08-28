const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();

const cors=require("cors");

const app=express();

mongoose.connect(process.env.MONGO_URL);
const db=mongoose.connection;
db.on("error",console.error.bind(console,'connection-error'));
db.once("open",()=>{
    console.log("Connected to database");
});

app.use(express.json());
app.use(cors());

const routes=require("./routes/todoroutes");

app.use(routes);


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
