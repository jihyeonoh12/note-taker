var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

//route files
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, function(){
    console.log("localhost:" + PORT);
});