var inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

function countWords(array) {
  if (!array.length) return;

  return array.reduce(function (previosValue, currentValue) {
    console.log(previosValue, currentValue);
    if (previosValue[currentValue]) {
      ++previosValue[currentValue];
    } else {
      previosValue[currentValue] = 1;
    }
    return previosValue;
  }, {});
}

countWords(inputWords);
