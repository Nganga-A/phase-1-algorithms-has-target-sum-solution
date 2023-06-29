function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // 
      if (array[j] === complement) return true;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

 O(n^2), where n is the length of the input array.
 this is because of the nested loo[]
*/

/* 
  Add your pseudocode here

  iterate the array of numbers
  for each number identify the complementary number that adds to target
  check if any of the remaining numbers is the complement
   if so, return true else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
