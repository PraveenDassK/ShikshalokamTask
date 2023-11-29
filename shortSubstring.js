//Q1 in Shikshalokam Assignment

function findingShortestSubstrings(s, x) {
  let shortestSubstr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + x - 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        let substring = s.substring(i, j + 1);
        if (
          substring.length >= x &&
          (!shortestSubstr.length ||
            substring.length === shortestSubstr[0].length)
        ) {
          shortestSubstr.push(substring);
        } else if (substring.length < shortestSubstr[0].length) {
          shortestSubstr = [substring];
        }
      }
    }
  }

  if (shortestSubstr.length) {
    for (let substr of shortestSubstr) {
      console.log(substr);
    }
  } else {
    console.log("not-found");
  }
}

let s = "abccdbacca";

let x = 4;
console.log("x =", x);
findingShortestSubstrings(s, x);
