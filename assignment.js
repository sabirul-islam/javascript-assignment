// feet To mile
function feetToMile(feet){
    var mile = feet / 5280;
    if(mile < 0){
    return "Miles value can not be negative.";  //this conditoin for bonus mark
    }
    else{
    return mile;
    }
    }

    

// Calculating Wood
    function woodCalCulator(chair, table, bed){
    var chairCount = 1 * chair;
    var tableCount = 3 * table;
    var bedCount = 5 * bed;
    var total = chairCount + tableCount + bedCount;
    return total;
    }



//Finding Tiny Friend
function tinyFriend(friends){
    var tiny = friends [0];

    for (var i = 0; i < friends.length; i++){
        var currentFriend = friends[i];

    if(currentFriend.length < tiny.length) {
        tiny = currentFriend;
        }
        }
    return tiny;
    }


    
// Brick calculation
function brickCalculator(storeyed){
    if(storeyed<=10){
        return storeyed * 15 * 1000;
    }
    if (storeyed<=20){
        return (storeyed-10) * 12 * 1000 + 150000;
    }
    if (storeyed<=Infinity){
        return (storeyed-20) * 10 * 1000 + 270000;
    }
    return storeyed;
    }