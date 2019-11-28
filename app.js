// server.js
// where your node app starts
// const md5 = (str) => str;

// init project
var md5 = require("blueimp-md5");
const cors = require('cors');
const express = require("express");
var bodyParser = require('body-parser')
const app = express();
app.use(cors())
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

const hashCode  = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)

const db = {}

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.json())

// http://expressjs.com/en/starter/basic-routing.html

app.post("/shorten", function(request, response) {
  console.log(request.body);
  const paramId = request.body.id;
  console.log(paramId);
  const hash = md5(paramId);
  const id = { name: '', final: false };
  let length = 1;
  while(!id.final){
    id.name = hash.substring(0, length);
    if(!db[id.name]){
      db[id.name] = paramId;
      id.final = true;
    }
    length++;
  }
  console.log(db)
  response.json(id);
});

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/public/index.html");
});

app.get("/:id", function(request, response) {
  console.log(request.id);
  response.redirect(db[request.params.id] ? `https://${db[request.params.id]}` : '/');
});


// listen for requests :)
const listener = app.listen(80, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

