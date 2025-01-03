class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        return this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "stack is empty."
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("peek" + stack.peek());
console.log("pop" + stack.pop());
console.log("peek" + stack.peek());
console.log("size" + stack.size());
console.log("isEmpty " + stack.isEmpty());
