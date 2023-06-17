const express = require("express");
const {connection} = require("./configs/db.js");
const {userRouter} = require("./routes/user.routes.js");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/user",userRouter);

app.listen(8080,async()=>{
    try {
        await connection;
        console.log("Connected to database");
    } catch (error) {
        console.log("Cannot connect to database");
        console.log(error);
    }
    console.log("Server is running at port 8080");
})