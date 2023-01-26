function digitalClock(seconds) {
    return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
  }
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));