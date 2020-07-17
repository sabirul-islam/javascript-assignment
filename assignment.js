// feet To mile
function feetToMile(feet){
    var mile = feet / 5280;
    if(mile < 0){
    return "Miles value can not be negative.";  //this conditoin for bonus mark
    }
    else{
    return mile + " mile";
    }
    }

    
// Calculating Wood
    function woodCalCulator(chair, table, bed){
    var chairCount = 1 * chair;
    var tableCount = 3 * table;
    var BedCount = 5 * bed;
    var total = chairCount + tableCount + BedCount;
    return total + " cft";
    }


//Finding Tiny Friend
function tinyFriend(friends) {
    var tiny = friends [0];

    for (var i = 0; i < friends.length; i++){
        var currentFriend = friends[i];

    if(currentFriend.length < tiny.length) {
        tiny = currentFriend;
        }
        }
    return tiny;
    }