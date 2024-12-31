package project.problems.linkedlist_reversal;

import java.util.List;

public class ReversedLinkedlist {

    public ListNode reverse(ListNode head) {
        ListNode current = head;
        ListNode previous = null;
        ListNode next = null;

        while(current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        return previous;
    }

    public static void main(String[] args) {

        ReversedLinkedlist reversedLinkedlist = new ReversedLinkedlist();
        ListNode head = new ListNode(2);
        head.next = new ListNode(4);
        head.next.next = new ListNode(6);
        head.next.next.next = new ListNode(8);
        head.next.next.next.next = new ListNode(10);

        ListNode result = reversedLinkedlist.reverse(head);
//        ListNode result = head;
        while (result != null) {
            System.out.print(result.value + " ");
            result = result.next;
        }
    }
}

