class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(ele) {
        return this.items.push(ele);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        let queueStr = "";
        for (let ele of this.items) {
            queueStr += ele + ", ";
        }
        // return "Queue is:"+queueStr;
        console.log("Queue is:", queueStr);
    }

}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.printQueue();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue.printQueue());


