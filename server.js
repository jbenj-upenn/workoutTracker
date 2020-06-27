const express = require('express')
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use(require("./routes/api"));
app.use(require("./routes/html"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.get('/', function(req, res){
    res.send("I 'm working")
    // res.sendFile(__dirname,'')
});

app.listen(PORT, function(){
    console.log(`listening on http://localhost:${PORT}`)
})

