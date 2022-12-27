const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1 Remove Banana from the array.
 let answer0 = fruits.shift(); 
 console.log(answer0)


// Sort the array in alphabetical order.
let result =fruits.sort()
console.log(result)

//Add “Kiwi” to the end of the array.

let resultat= fruits.push("Kiwi")
console.log(resultat)

// Remove “Apples” from the array. Don’t use the same method as in part 1.

let resultat0= fruits.splice(1);
console.log(resultat0)

//Sort the array in reverse order. (Not alphabetical, but reverse the current Array

let answer =fruits.reverse()
console.log(answer)



//Exercise 2:

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[2])