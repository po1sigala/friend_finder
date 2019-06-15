// ----------------REQUIREMENTS-------------------------------
var express = require("express");
var path= require ("path");
var app = express();
apiRoutes= require("./app/routing/apiRoutes");
htmlRoutes=require("./app/routing/htmlRoutes");
// --------------------PORT---------------------------

var PORT= process.env.PORT || 8080;


// ------------------ROUTES-----------------------------
//require api routes. you exported the the function so you have acess to it then youy can all 
apiRoutes(app);
htmlRoutes(app);
// --------------------SERVER START---------------------------
app.listen(PORT,function(){
    console.log("app is listening on port: "+PORT);
})

