//when not using router you need to reqiure path everywhere
var path= require ("path");
// --------------------GET ROUTES---------------------------
module.exports= function(app){
//send user to the survey when they hit the sruvey route
app.get("/survey",function(req,res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});
app.get("/",function(req,res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"../public/home.html"))
})
};