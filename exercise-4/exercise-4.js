function leapYears(year) {
  // Coding here
  if (!year) return;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;

  return false;
}

console.log(leapYears(2000));
console.log(leapYears(1985));
