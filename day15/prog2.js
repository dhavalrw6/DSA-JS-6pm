let str = "({{}[()]})"

const isValid = (str)=>{
    let stack = []
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if(char === "(" || char === "{" || char === "[") 
        {
            stack.push(char);
        }
        else
        {
            if(stack.length === 0){
                return false;
            }
            let top = stack.pop();
            if(
                (char === ")"  && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")
            )
            {
                return false;
            }
        }

    }
    return stack.length === 0;
}

console.log(isValid(str));
