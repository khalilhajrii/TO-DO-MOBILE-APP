var express = require("express");
var app = express();
var mongoose = require("mongoose");
var taskRouter = require("./Routes/TaskRoutes");
var cors = require('cors');

//middleware
app.use(express.json());
app.use("/api/tasks", taskRouter);
app.use(cors())
//Mongoose config
mongoose.connect(
    'mongodb://localhost:27017/to_do',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);
//Port installation
app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 80')
})
module.exports = app;