var express = require('express'),
app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.render("index");
});

app.get('/test',function(req,res){
  res.render("awesome");
});

app.listen(3000, function(){
  console.log("Getting started on port 3000");
});