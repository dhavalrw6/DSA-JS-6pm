const reverseStr = (str) => {
    let stack = [];

    for (let ch of str) {
        stack.push(ch);
    }
    let reversedStr = "";
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

console.log(reverseStr("Hello world!"));


