/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let result = [];
    let flag = 0;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<=numbers.length; j++){
            if(numbers[i]+numbers[j] === target){
                result.push(i+1, j+1);
                flag = 1;
                break;
            }
        }
        if(flag === 1){
           break;
        }
    }
    
    return result;
};