/*
The Two Sum Problem

You are given an array of numbers and a target number. Determine if any two numbers within the array can sum to the target number.

Write a function called twoSum and return true if two numbers in the array can add up to the target number.

Inputs: twoSum([5, 8, 2, 1, 6, 3], 13)
Outputs: true

Problem Strategy:
We need to compare each number within the given array and see if any combination can add up to the target number. 
1. Loop through the array
    2. Create a nested loop to loop over the array and compare the current element (in the outer loop) to the next one (in the inner loop).
        3. If any two numbers can sum up to the target number return true.
*/

// Solution 1, The for loop approach.

const twoSum = (arr, target) => {

    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] + arr[j] === target) {
                return true
            }
        }
    }
    return false;
}

// Solution 2, The hash table approach.
const twoSum = (arr, target) => {
    let table = {};

    for (let i = 0; i < arr.length; ++i) {
        let targetMinusElement = target - arr[i];

        if (table[targetMinusElement] !== undefined) {
            return true;
        }

        table[arr[i]] = true;
    }

    return false;
}

// Solution 3
// This is the fastest solution to this problem.
// Sort the array.
// Walk two pointers inward starting from the front and back of the array.
// If the two pointers add up to the target number, we are done.
// If not, they continue walking inward.

const twoSum = (arr, target) => {
    arr = arr.sort();
    let front = 0;
    let back = arr.length - 1;

    while (front < back) {
        let sum = arr[front] + arr[back];
        if (sum === target) {
            return true;
        } else if (sum < target) {
            front++;
        } else {
            back--;
        }
    }
    return false;
}

// Solution 4, Modified problem where you need to use the first number in the array as the target. Return the two numbers that add up to the target or return -1.
// Return the numbers within the following string format: Here are the numbers: [num1], [num2]
// Inputs: twoSum([5, 8, 2, 1, 6, 3])
// Outputs: Here are the numbers: 2, 3
const twoSum = (arr) => {
    let twoArr = [];
    let target = arr.shift();

    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] + arr[j] === target) {
                twoArr.push(`Here are the numbers: ${arr[i]}, ${arr[j]}`);
            }
        }
    }
    return twoArr.join('') || -1;
}

