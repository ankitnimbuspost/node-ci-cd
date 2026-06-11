const express = require("express");
const dotenv = require("dotenv");
const route = require("./route")
dotenv.config()
const app = express();

app.use(express.json());
app.use("",route);
console.log("index file")
app.listen(process.env.PORT,()=>{
    console.log("Server started at port: ",process.env.PORT)
})
