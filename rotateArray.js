var rotate = function(nums, k) {
    k %= nums.length;
    if (k !== 0) [].push.apply(nums, nums.splice(0, nums.length - k));
};