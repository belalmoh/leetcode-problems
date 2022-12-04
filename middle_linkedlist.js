class LinkedList {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    getMiddleNode() {
        let current = this;
        let fast = this.next.next;
        while(fast != null) {
            current = current.next;
            fast = fast.next.next;
        }

        return current.value;
    }

    reverse(head = this) {
        let prev = null;
        let next = null;
        while (head !== null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    isPalindrome() {
        let current = this;
        let reversed = this.reverse();
        while(current != null && reversed != null) {
            if(this.value != reversed.value) {
                return false;
            }
            current = current.next;
            reversed = reversed.next;
        }
        return true;
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.next = new LinkedList(2);
myLinkedList.next.next = new LinkedList(3);
myLinkedList.next.next.next = new LinkedList(2);
myLinkedList.next.next.next.next = new LinkedList(1);
// myLinkedList.next.next.next.next.next = new LinkedList(6);

// console.log(myLinkedList.getMiddleNode());
console.log(myLinkedList.isPalindrome());