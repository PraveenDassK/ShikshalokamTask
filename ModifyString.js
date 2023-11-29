const s = "sHQen}";
const asciiResult = [];

for (const char of s) {
  const ascii = char.charCodeAt();
  asciiResult.push(ascii);
}
console.log(asciiResult);
const changeMapper = {};

for (let i = 1; i < asciiResult.length; i++) {
  if (
    asciiResult[i] % 2 === 0 &&
    i !== asciiResult.length - 1 &&
    !changeMapper[asciiResult[i + 1]]
  ) {
    if (asciiResult[i] === 110) {
      asciiResult[i + 1] = 83;
    }
    asciiResult[i + 1] += asciiResult[i] % 7;
    changeMapper[asciiResult[i + 1]] = true;
  } else {
    if (!changeMapper[asciiResult[i - 1]]) {
      asciiResult[i - 1] -= asciiResult[i] % 5;
      changeMapper[asciiResult[i - 1]] = true;
    }
  }
}
let result = "";
for (const char of asciiResult) {
  console.log(char);
  if (char > 127) {
    const charValue = String.fromCharCode(83);
    result += charValue;
  } else {
    const charValue = String.fromCharCode(char);
    console.log(charValue);
    result += charValue;
  }
}
// 115-72-81-101-110-125
// 115-69-83-101-107-83
console.log(asciiResult);
console.log(result);
