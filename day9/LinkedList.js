class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        else {
            let current = this.head;
            while (current.next != null) {
                console.log(current.data);
                current = current.next
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        let str = '';
        while (current != null) {
            // console.log(current.data);            
            str += current.data + ', '
            current = current.next;
        }
        console.log(str);

        // return str;
    }

    addFirst(data){
        // let current = this.head;
        // console.log(current);
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode  
    }

    removeFirst(){
        this.head = this.head.next;
    }

}


const list = new Linkedlist();

list.append(1)
list.append(2)
list.append(3)
list.addFirst(12);
list.addFirst(14);
list.addFirst(54);
list.append(32);

list.printList();

list.removeFirst();

list.printList();
