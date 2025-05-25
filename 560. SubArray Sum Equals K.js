// 560. Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2

var subarraySum = function(nums, k) {
    const prefixMap = new Map(); // Stores: prefixSum -> count of occurrences
    prefixMap.set(0, 1);         // Base case: empty subarray sum is 0

    let prefixSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]; // Add current number to running sum

        // Check if there exists a prefixSum so that:
        // current prefixSum - previous prefixSum = k
        if (prefixMap.has(prefixSum - k)) {
            count += prefixMap.get(prefixSum - k); // Add all matching cases
        }

        // Update the map with the current prefixSum
        prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
    }

    return count;
};
