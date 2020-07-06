const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api")
const routesHTML = require("./routes/html");

// =======DECLARE PORT
const PORT = process.env.PORT || 3003

// =======INSTANCE OF EXPRESS
const app = express()

// =======MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api"));
app.use(routesHTML);

// ========CONNECT TO MONGOOSE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/practiceDb", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, function(){
    console.log(`listening on http://localhost:${PORT}`)
})