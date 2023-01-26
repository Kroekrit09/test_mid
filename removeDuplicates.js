var arr1 = ["1", "0", "1", "0"];
var arr2 = ["The", "big", "cat",];
var arr3 = ["John", "Taylor", "John",];
      
    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
      
    console.log(removeDuplicates(arr1));
    console.log(removeDuplicates(arr2));
    console.log(removeDuplicates(arr3));