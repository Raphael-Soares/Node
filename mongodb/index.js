//import
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//config
const port = 4000;
const app = express();
mongoose.set("strictQuery", true);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//app

app.get("/", (req, res) => {
    res.json({message: "hello world"});
});

const personRoutes = require("./routes/PersonRoutes");

app.use("/person", personRoutes);
// Running app

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Concetando-se ao MongoDB");
        app.listen(port);
    })
    .catch((err) => {
        conole.log(err);
    });
