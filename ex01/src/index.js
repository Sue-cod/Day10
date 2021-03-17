// Only change code below this line
var myPet = {
    species: "Maltezer",
    name: "Maia",
    legs: 4,
    friends: ["Luigi", "Garfield"]
};

function myFunction(myPet) {
    return myPet;
}
// Only change code above this line


console.log(myFunction(myPet));  // Change this line
module.exports = { myPet, myFunction };