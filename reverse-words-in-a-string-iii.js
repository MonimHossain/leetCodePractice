/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const arrayStrings = s.split(" ");
    
    for(let i=0; i<arrayStrings.length; i++){
        arrayStrings[i] = reverseString(arrayStrings[i]);
    }
   
    const joinArray = arrayStrings.join(" ");
    
    return joinArray;
};

function reverseString(str) {
    return str.split("").reverse().join("");
}