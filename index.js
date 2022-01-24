
const express=require("express");
const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbLoader=require("./loaders/index");

const { PostRouter, LogRouter } = require("./routers/index");
dbLoader();

const PORT = process.env.PORT || process.env.APP_PORT;

var corsOptions = {
    origin: '*',
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.get("/", (req, res) => {
    res.status(200).send("Project index");
})
app.listen(PORT, () => {
    app.use("/posts",PostRouter);
    app.use("/logs",LogRouter);
    console.log(`app runnint port ${PORT}`)
})