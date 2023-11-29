//Q2 in Shikshalokam Assignment

function modifyString(s) {
  let result = "";
  let previousChanged = false;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);

    if (charCode % 2 === 0 && !previousChanged) {
      let newCharCode = charCode + (charCode % 7);
      result += String.fromCharCode(newCharCode);
      console.log(result, "for even");

      previousChanged = true;
    } else if (charCode % 2 !== 0 && i > 0 && !previousChanged) {
      let newCharCode = s.charCodeAt(i - 1) - (charCode % 5);
      newCharCode = newCharCode < 0 ? 83 : newCharCode;
      result = result.slice(0, -1) + String.fromCharCode(newCharCode) + s[i];
      console.log(result, "for odd");

      previousChanged = true;
    } else {
      result += s[i];
      previousChanged = false;
    }
  }

  return result;
}
let finalResult = modifyString("sHQen");
console.log(finalResult, "this is final output");
