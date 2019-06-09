require("../../server");
// --------------------GET ROUTES---------------------------

//send user to the survey when they hit the sruvey route
app.get("/survey",function(req,res){
    console.log(__dirname);
    res.sendfile(path.join(__dirname,"survey.html"));
});
app.get("/",function(req,res){
    console.log(__dirname);
    res.sendfile(path.join(__dirname,"home.html"))
})
