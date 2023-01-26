function sumTwoSmallestNumbers(numbers) {  
    a = Math.min.apply(Math,numbers)
    numbers.splice(a)
    b = Math.min.apply(Math,numbers)
    return a + b
  }
   console.log(sumTwoSmallestNumbers([19,5,42,2,77]));
   console.log(sumTwoSmallestNumbers([10,343445353,3453445,34535453453]));
   console.log(sumTwoSmallestNumbers([2,9,6,-1]));
   console.log(sumTwoSmallestNumbers([879,953,694,-847,342,221,-91,-723,791,-587]));
   console.log(sumTwoSmallestNumbers([3643,2902,3951,-475,1617,-2385]));