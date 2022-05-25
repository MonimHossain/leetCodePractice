var countSubstrings = function(s) {
    let count = 0;
    let len = s.length;
    
    for(let i = 0; i<len; i++){
        count++;

        let left = i-1;
        let right =  i+1;
        while(left >=0 && right < len && s[left]==s[right]){
            count++;
            left--;
            right++;
        }
        left = i;
        right = i+1;
        while(left >=0 && right < len && s[left]==s[right]){
            count++;
            left--;
            right++;
        }
    }
    return count;
};