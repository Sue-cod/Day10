function myFunction(myObj, checkProp) {
    // Only change code below this line
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
    return "Not found";
  }
    // Only change code below this line
}
console.log(myFunction(testObj, 'title'));
module.exports = myFunction;
