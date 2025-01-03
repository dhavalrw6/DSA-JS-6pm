class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        let newNode = new Node(data);
        if(this.head == null){ 
            this.head = newNode;
            return;
         }

         let current = this.head;
         while(current.next){
            current = current.next;
         }
         current.next = newNode;
    }

    // addAt
    insertAt(index,data){
        if(index < 0 || index > this.size()){ 
        console.log("invalid index.");        
        return;
      }
      if(index == 0){
        this.addFirst(data);
      }
      let current = this.head;
      let newNode = new Node(data);
      for(let i = 0; i< index-1;i++){
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;

    }

    removeAt(index){
        if (index < 0 || index > this.size()) {
            console.log("invalid index.");
            return;
        }
        if(index == 0){
            this.removeFirst();
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;            
        }
        current.next = current.next.next;
    }

    size(){
        if(!this.head) {return}
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next
        }
        return count;
    }

    removeFirst(){
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){ return }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }

    printList(){
        if(!this.head)  return;
        let str = '';
        let current = this.head;
        while(current){
            str += current.data + ', ';
            current = current.next;
        }
        // return str;
        console.log(str);        
    }

    reverse(){
        let prev = null;
        let current = this.head;
        while(current){
            // console.log(prev);            
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode
        }
        this.head = prev;
    }

}

const list =new Linkedlist();

list.addLast(1)
list.addLast(2)
list.addLast(3)
list.addFirst(30)
list.printList();
list.insertAt(1,45);
list.printList();
list.removeAt(2);
list.printList();
list.reverse();
list.printList();
  