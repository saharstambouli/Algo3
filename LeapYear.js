   // A year is a leap year if it is divisible by 4
    // but not divisible by 100, unless it is also divisible by 400
 
    function isLeapYear(year) {
 
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false


 