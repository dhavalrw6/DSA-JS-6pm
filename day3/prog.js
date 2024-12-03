// qus 1 Palindrome Number..
// input: 121 --->>> output: true
// input: 123 --->>> output: false

const isPalindrome = function (x) {
    return x<0 ? false : x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));


