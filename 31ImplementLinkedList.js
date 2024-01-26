class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return newTail;
    }

    // Add Element in First Position
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Remove Element in First Postion
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
    }

    get(index) {
        if (index < 0 && index >= this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        let current = this.get(index);
        if (!current) return undefined;
        current.value = val;
        return current;
    }

    inser(index, val) {
        if (index < 0 && index > this.length) return undefined;
        if (index === 0) {
            this.unshift(val);
        }
        if(index === this.length) {
            this.push(val);
        }
        let newNode = new Node(val);
        let preNode = this.get(index - 1);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return this;
    }

    remove() {
        if (index < 0 && index > this.length) return undefined;
        if (index === 0) this.shift();
        if (index === this.length) this.pop();
        let preNode = this.get(index - 1);
        let removedNode = preNode.next;
        preNode.next = removedNode.next;
        this.length--;
    }

    print() {

    }
}

const sll = new SingleLinkList();
console.log(sll);
sll.push(1);
console.log(sll);
sll.push(2);
console.log(sll);
sll.pop();
console.log(sll);