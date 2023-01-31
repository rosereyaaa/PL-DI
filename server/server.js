const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//route
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected")) //if the promise is fulfilled -> it will run then
    .catch((err) => console.log(err));

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use('/api', postRoutes);
app.use('/api', authRoutes);

// route
app.get("*", (req, res) => {
    res.json({
        data: "You reached nodejs api for react node crud app",
    });
});

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));