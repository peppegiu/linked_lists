class LinkedList {
    head = null;
    length = 0;

    append(value) {
        if (this.head === null) {
            this.head = new Node(value, 0);
            this.length++;
        }
        else {
            let node = this.head;
            let i = 1;
            while (node.nextNode !== null) {
                node = node.nextNode;
                i++;
            }
            node.nextNode = new Node(value, i);
            this.length++;
        }
    }

    preppend(value) {
        const list = new Node(value, 0);
        list.nextNode = this.head;
        this.head = list;
        this.length++;
    }

    size() {
        let i = 0;

        if (this.head === null) {
            return 0;
        }
        else {
            let node = this.head;
            while(node.nextNode !== null) {
                node = node.nextNode;
                i++;
            }
            return i;
        }
    }

    returnHead() {
        if (this.head === null) {
            return undefined;
        }
        else {
            return this.head.value;
        }
    }
    
    tail() {
        if (this.head === null) {
            return undefined;
        }
        else {
            let node = this.head;
            while (node.nextNode !== null) {
                node = node.nextNode;
            } 
            return node.value
        }
    }

    at(index) {
            let i = 0;
            let node = this.head;
            while (i !== index && node !== null) {
                node = node.nextNode;
                i++;
            }
            if (i == index) {
                return node.value;
            }
            else {
                return undefined;
            }
        
    }

    pop() {
        if (this.head === null) {
            return undefined;
        }
        else {
            const aux = this.head;
            this.head = this.head.nextNode;
            this.length--;
        }
    }

    contains(value) {
        const node = this.head;
        while (node !== null) {
            if (node.value === value) {
                return true;
            }
            else {
                node = node.nextNode;
            }
        }
        return false;
    }

    findIndex(value) {
        let node = this.head;
        while(node !== null) {
            if (node.value === value) {
                return node.index
            }
            else {
                node = node.nextNode;
            }
        }
        return -1;
    };

    toString() {
        if (this.head === null) {
            return "";
        }
        else {
            let node = this.head;
            let string = "";
            while (node !== null) {
                if (node.index == 0) {
                    string += `( ${node.value} ) -> `;
                }
                if (node.nextNode === null) {
                    string += "null";
                } 
                else {
                    string += `( ${node.nextNode.value} ) -> `;
                } 
                node = node.nextNode;
            }
            return string;
        }
    }

    insertAt(index, ...elements) {
        let node = this.head;
        let prev;
        let after;
        if (index >= this.length || index < 0){
            throw RangeError("Out of bounds");
        }
        while (node.index !== index) {

            
            node = node.nextNode;
            if (node === null) {
                return undefined;
            }
            prev = node;
            
        }
        after = node.nextNode;
        const aux = node;

        
        for (let i = 0; i < elements.length; i++) {
            let j = 1;
            let newNode;
            if (prev === undefined) {
                newNode = new Node(elements[i], 0)
                this.head = newNode;
            } 
            else {
                newNode = new Node(elements[i], prev.index + j)
                prev.nextNode = newNode;
            }
            
            
            
            
            if (i == elements.length - 1) {
                newNode.nextNode = after;
            }
            else {
                prev = newNode;
            }
            j++;
            node = newNode;
        }
        node.nextNode = after;
        this.length = this.length + elements.length;
        node = after
        while (node !== null) {
            node.index++;
            node = node.nextNode;
        }

    }

    removeAt(index) {
        
        if (this.head == null) {
            return undefined;
        }
        let prev;
        let node = this.head;

        if (index < 0 || index >= this.length) {
            throw RangeError("Out of bounds");
        }
        if (index == 0) {
            this.head = node.nextNode;
        }
        else {
           while (node.index !== index) {
                prev = node;
                node = node.nextNode;
           }

           prev.nextNode = node.nextNode;
           node.index--
        }
        
        while (node !== null) {
                node.index--;
                node = node.nextNode;
           }
    }

}

class Node {
    constructor(value, index) {
        this.value = value;
        this.index = index;
    }
    nextNode = null;
}

let list = new LinkedList();

list.append("dog");
list.append("cat");
console.log(list.findIndex("cat"));

list.insertAt(0, "elephant", "bear");
list.append("turtle");


list.removeAt(0);
console.log(list.toString());