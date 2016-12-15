// accept array of strings - dwarf names: ["Doc", "Dopey", "Bashful", "Grumpy"]
// prints out dwarfs in a numbered list based on an array: 1. Dopey 2. Grumpy 3. Bashful
function dwarfRollCall(dwarves) {
  var list = "";
  for (var i = 0; i < dwarves.length; i++){
    list += `${i + 1}. ${dwarves[i]} `;
  } return list;
}

// capitalizes each element and adds an exclamation mark
// returns an array with the same number of elements that it was given
function summonCaptainPlanet(planeteerCalls){
  var array = [];
  var string = "";
  for (var i = 0; i < planeteerCalls.length; i++) {
       array.push(string.toUpperCase() + "!");
     }
     return array;
 }

// returns true if any calls are longer than 4 characters
// returns false if no calls are longer than 4 characters
function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

// returns the first element of the array that is cheese
// returns 'no cheese!' if the array does not contain a type of cheese
function findTheCheese (foods) {
  var cheez = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++) {
    for (var j = 0; j < cheez.length; j++) {
      if (cheez[j] == foods[i]) {
        return foods[i];
        }
      }
    }
    return "no cheese!";
  }
