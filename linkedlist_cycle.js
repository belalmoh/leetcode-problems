class LinkedList {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    hasCycle() {
        let slowPointer = this.next;
        let fastPointer = this.next.next;

        while(fastPointer != null && fastPointer.next != null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if(fastPointer.value == slowPointer.value){
                return true;
            }
        }
        return false;
    }

    getCycleLength() {
        let slowPointer = this.next;
        let fastPointer = this.next.next;

        while(fastPointer != null && fastPointer.next != null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if(fastPointer.value == slowPointer.value){
                return this.calculateCycleLength(slowPointer);
            }
        }
        return false;
    }

    calculateCycleLength(slow) {
        let current = slow;
        let cycleLength = 0;

        while(true) {
            current = current.next;
            cycleLength++;
            if(current === slow) {
                break;
            }
        }
        return cycleLength;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.next = new LinkedList(2);
myLinkedList.next.next = new LinkedList(3);
myLinkedList.next.next.next = new LinkedList(4);
myLinkedList.next.next.next.next = new LinkedList(5);
myLinkedList.next.next.next.next.next = new LinkedList(6);
myLinkedList.next.next.next.next.next.next = myLinkedList.next.next;

console.log(myLinkedList.hasCycle());
console.log(myLinkedList.getCycleLength());