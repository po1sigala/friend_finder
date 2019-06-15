// require("../../server");
var friends= require("../data/friends");
//when not using router you need to reqiure path everywhere
var path= require ("path");
module.exports = function(app){
    app.get("/api/friends",function(req,res){
        console.log(__dirname);
        //display JSON of all friends
        res.sendFile(path.join(__dirname,"friends.js"));
    })
    
    app.post("/api/friends",function(req,res){
        //store the JSON body from the post request in a variable
        var newRes=req.body;
        //push the posted json object into friends array located in friends.js
        friends.push(newRes);
        //respond with the friends object an array of spcific user objects
        res.json(friends);
        
    })

}

//ugly way puit all the above code in this exports function