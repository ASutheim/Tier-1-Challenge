/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log("Step 0 complete! client.js loaded!");

// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;

let highScore = 29;

console.log("Test of highScore variable, should say 29:", highScore);

// 2. Make a new empty array called myScrabbleTiles.

let myScrabbleTiles = [];

console.log("Test of myScrabbleTiles array, should be empty:", myScrabbleTiles);

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/

myScrabbleTiles.push({ tile: "N", score: 1 });
myScrabbleTiles.push({ tile: "K", score: 5 });
myScrabbleTiles.push({ tile: "Z", score: 10 });
myScrabbleTiles.push({ tile: "X", score: 8 });
myScrabbleTiles.push({ tile: "D", score: 2 });
myScrabbleTiles.push({ tile: "A", score: 1 });
console.log(
  "Test of myScrabbleTiles array, should contain 6 items:",
  myScrabbleTiles
);

// 4. Remove the last tile from myScrabbleTiles.

myScrabbleTiles.pop();
console.log(
  "Removed last item from myScrabbleTiles, should now be an array of 5 ending in tile 'D2':",
  myScrabbleTiles
);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
myScrabbleTiles.push({ tile: "F", score: 4 });
console.log(
  "Added one tile to array, should now be 6 items ending in tile 'F4'",
  myScrabbleTiles
);

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.

function sumTiles(anArray) {
  let initialScore = 0;
  for (let i = 0; i < anArray.length; i++) {
    initialScore += anArray[i].score;
  }
  return initialScore;
}
console.log(
  `Test of sumTiles function, should say 30:`,
  sumTiles(myScrabbleTiles)
);

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".

let myScore = sumTiles(myScrabbleTiles);
console.log(`Test of myScore variable, should say 30:`, myScore);

// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.

// DONE!
