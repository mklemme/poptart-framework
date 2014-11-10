var express = require('express'),
app = express();

app.set("view engine","jade");
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.render("index",{
    bodyClass: "home",
    title: "Home"
  });
});

app.get('/grid',function(req,res){
  res.render("grid");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Getting started on port 3000");
});
