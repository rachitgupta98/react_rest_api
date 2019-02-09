const express = require("express");
//const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//setup express
const app = express();
mongoose.Promise = global.Promise;
//connect to mongodb
mongoose.connect(
  "mongodb://localhost/ninjago",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
//app.use(express.static("public"));
app.use(bodyParser.json());

//initalize routes
app.use("/api", require("./routes/api"));

//handling error
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

//listen request
app.listen(process.env.port || 5000, function() {
  console.log("listening to port 5000");
});
