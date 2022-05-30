return function(n) {
    let result = n;
    for(let i=0; i<n; i++){
        if(isBadVersion(i)){
            result = i;
            break;
        }
    }
    return result;
};