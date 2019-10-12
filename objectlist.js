// You have been provided with an object containing different items and their properties
// You need to store the elements that have to be bought in an array named itemList
// The items that have to be bought have the value of key isAvailable as false

var itemsToBuy = {
    bread : {
        isAvailable : false,
        quantityToBuy : 2,
    },
    eggs : {
        isAvailable : true,
        quantityToBuy : 0
    },
    tomatoes : {
        isAvailable : false,
        quantityToBuy : 23
    }
}

// Create a new array here.
var itemsList = [];
// Write the logic for pushing the elements to be bought in the array here
for(key in itemsToBuy){
    if(itemsToBuy[key].isAvailable === false){
        itemsList.push(key);
    }
}
// Print the array here
console.log(itemsList);
