function arr_pairs(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0) 
          return false;
    }
    return true;
}
console.log(arr_pairs([1,2,3],3))
console.log(arr_pairs([1,2,3],6))
console.log(arr_pairs([1,2,3],9))