package project.problems.stacks;

import java.util.Stack;

public class SortStack {
    public static Stack<Integer> sortStack(Stack<Integer> input) {
        Stack<Integer> tmpStack = new Stack<Integer>();

        while(!input.isEmpty()) {
            int head = input.pop();
            while(!tmpStack.isEmpty() && tmpStack.peek() > head) {
                input.push(tmpStack.pop());
            }

            tmpStack.push(head);
        }

        return tmpStack;
    }

    public static void main(String[] args) {
        Stack<Integer> input = new Stack<>();
        input.push(34);
        input.push(3);
        input.push(31);
        input.push(98);
        input.push(92);
        input.push(23);

        Stack<Integer> tmpStack = sortStack(input);
        System.out.println("Sorted numbers are:");
        while (!tmpStack.isEmpty()) {
            System.out.print(tmpStack.pop() + " ");
        }
    }
}
