function capToFront(str) {
    let result = "";
    for (let c of str)
      if (c >= 'A' && c <= 'Z')
        result += c;
    for (let c of str)
      if (c < 'A' || c > 'Z')
        result += c;
    return result;
  }
  
  console.log(capToFront("hApPy"));
  console.log(capToFront("moveMENT"));
  console.log(capToFront("shOrtCAKE"));