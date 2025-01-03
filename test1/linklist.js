class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
        }
        else {
            let current = this.head;
            while (current.next) {                
                current = current.next;
            }
            current.next = newNode
        }
    }
    traverse() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkList();
list.append(10);
list.append(20);

list.traverse();
