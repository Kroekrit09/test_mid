function invalidIP(str) {
    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  
    return regexExp.test(str);
  }
console.log(invalidIP("1.2.3.4"));
console.log(invalidIP("1.2.3."));
console.log(invalidIP("1.2.3.4.5"));
console.log(invalidIP("123.45.57.99"));
console.log(invalidIP("123.455.48.50"));
console.log(invalidIP("123.545.557.055"));
