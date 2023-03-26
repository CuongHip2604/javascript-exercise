function repeatString(string, num) {
  // Coding here

  if (!string || !num) return;

  const array = Array.from({ length: num }, (_, i) => i + 1);

  const result = array.reduce(function (previosValue) {
    return previosValue + string;
  }, "");

  return result;
}

console.log(repeatString("hey", 3));
