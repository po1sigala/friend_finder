require("../../server");
require("../data/friends");

app.get("/api/friends",function(req,res){
    console.log(__dirname);
    //display JSON of all friends
    res.sendFile(path.jopin(__dirname,"friends.js"));
})

app.post("/api/friends",function(req,res){
    var newRes=req.body;
    //push the posted json object into friends array located in friends.js
    friends.push(newRes);
    //respond with the friends object an array of spcific user objects
    res.json(friends);
    
})