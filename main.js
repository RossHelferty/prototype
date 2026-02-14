'use strict'

// event listeners go here
document.getElementById("start").addEventListener("click", start);
window.addEventListener("keydown", key)
document.getElementById("inventory").addEventListener("click", inventory)
document.getElementById("fishingpost").addEventListener("click", function(){location("fishingpost");})
document.getElementById("inn").addEventListener("click", function(){location("inn");})
document.getElementById("dungeon").addEventListener("click", function(){location("dungeon");})
document.getElementById("guild").addEventListener("click", function(){location("guild");})
document.getElementById("conveniencestore").addEventListener("click", function(){location("conveniencestore");})

// universal variables go here
let recentpress, currentgame;
let inventorystate = "closed";

// simple functions go here
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// complex functions go here
function start(){
    location("overworld");
}

function key(e){
        let key = e.key;
    if (currentgame == "fishingpost"){
        if((key == 1)||(key == 2)||(key == 3)||(key == 4)||(key == 5)||(key == 6)||(key == 7)||(key == 8)||(key == 9)||(key == 0)){
            recentpress = Number(key);
        }
    }
    console.log(key);
    return recentpress;
}

function inventory(){
    if (inventorystate == "closed"){
        // open the inventory
        document.body.style.backgroundImage = "url('')";
        inventorystate = "open";
    } else {
        // close inventory
        document.body.style.backgroundImage = "url('')";
        inventorystate = "closed";
    }
    return console.log("The inventory is " + inventorystate + ".");
}

function location(place){
    console.log("Begin Navigation");
    if (place == "overworld"){
        // go to the overworld
        document.body.style.backgroundImage = "url('images/overworld.png')";
    } else if (place == "fishingpost"){
        // go fishing
        document.body.style.backgroundImage = "url('')";
    } else if (place == "inn"){
        alert("Work in Progress");
        // go to the inn
        document.body.style.backgroundImage = "url('')";
    } else if (place == "dungeon"){
        alert("Work in Progress");
        // go to the dungeon
        document.body.style.backgroundImage = "url('')";
    } else if (place == "guild"){
        alert("Work in Progress");
        // go to the adventurer's guild
        document.body.style.backgroundImage = "url('')";
    } else if (place == "conveniencestore"){
        alert("Work in Progress");
        // go to the convenience store
        document.body.style.backgroundImage = "url('')";
    } else {
        return console.log("Invalid location");
    }
}