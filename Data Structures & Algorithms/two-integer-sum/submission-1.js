class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    if(nums.length < 2) return -1;
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let req = target - nums[i];
        if(map.has(req)){
            let l = map.get(req);
            return [l, i];
        }
        map.set(nums[i], i)
    }
    return -1;
}
}
