const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const blogRoute = require("./routers/blog");

app = express();

//databses
mongoose
    .connect(process.env.database, {
        useNewUrlparser: true,
        useUnifiedTopology: false
    })
    .then(() => console.log("Sucess"))
    .catch(() => console.log("Error"));

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
app.use("/api", blogRoute);

const port = process.env.PORT || 4400;
app.listen(port, () => {
    console.log("listening on port" + port);
});
