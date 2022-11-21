/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 var twoSum = function(nums, target) {

  /*initial solution, returns all possible answers and combinations. Resulting in at least 2 'correct answers'

  nums.forEach( num => {
      var compliment = target - num
      if (nums.includes(compliment)){
          console.log([num, compliment]); //log for now
          return [num, compliment];
      }
  })

  */

  //solution 2, only returning the FIRST correct answer, avoiding duplicates. Without a hash map or for loop.
  let pass = false;
  let i = 0;
  let answer = null;
  
  
  while (pass === false && i < nums.length){
    let compliment = target - nums[i];
    if (nums.includes(compliment)){
      pass = true;
      answer = [nums[i], compliment]          
    }
    else {
      i++
    }
  }

  console.log(answer);   
  return answer;



};

twoSum ([2,7,11,15], 9);

//this answer currently returns the answer twice.