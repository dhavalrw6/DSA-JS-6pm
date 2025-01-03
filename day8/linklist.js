class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode
            return 
        }
        else
        {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode
        }
    }

    traverse(){
        let current = this.head;
        while(current != null){
            console.log(current);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.append(1)
list.append(2)
list.append(3)

list.traverse();