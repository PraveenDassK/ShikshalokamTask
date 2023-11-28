function printShortestSubstrings(s, x) {
  let shortestSubstrings = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + x - 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        let substring = s.substring(i, j + 1);
        if (
          substring.length >= x &&
          (!shortestSubstrings.length ||
            substring.length === shortestSubstrings[0].length)
        ) {
          shortestSubstrings.push(substring);
        } else if (substring.length < shortestSubstrings[0].length) {
          shortestSubstrings = [substring];
        }
      }
    }
  }

  if (shortestSubstrings.length) {
    for (let substr of shortestSubstrings) {
      console.log(substr);
    }
  } else {
    console.log("not-found");
  }
}

let s = "abccdbacca";

let x = 5;
console.log("x =", x);
printShortestSubstrings(s, x);
