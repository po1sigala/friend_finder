//require friends to have acess to all the users
require("friends.js")

$(document).ready(function(){

//when submit button is clicked get values
$(document).on("click",".btn", function(){
    //store values of input boxes in an array called data
    var data= $("input:checked")
                .map(function(){
                    return this.val;
                })
                .get();
    //run find friend to compare values
    findFriend(data);
})
function findFriend(data){
    //compare the responses in data to all the users stored in friends
};

});