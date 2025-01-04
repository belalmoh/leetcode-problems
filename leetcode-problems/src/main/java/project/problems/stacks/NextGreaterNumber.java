package project.problems.stacks;

import java.util.Arrays;
import java.util.Stack;
import java.util.ArrayList;
import java.util.List;

public class NextGreaterNumber {
    public List<Integer> nextLargerElement(List<Integer> arr) {
        List<Integer> res = new ArrayList<>();
        Stack stack = new Stack();

        for(int i = 0; i < arr.size(); i++) {
            int max = -1;
            for(int j = i; j < arr.size(); j++) {
                if(arr.get(i) < arr.get(j)) {
                    max = Math.max(arr.get(j), max);
                    break;
                } else {
                    max = -1;
                }
            }
            stack.push(max);
        }

        res = new ArrayList(stack);

        return res;
    }

    public static void main(String[] args) {
        NextGreaterNumber nextGreaterNumber = new NextGreaterNumber();
        List<Integer> arr = new ArrayList<>();
        arr.add(4);
        arr.add(5);
        arr.add(2);
        arr.add(25);
        System.out.println(nextGreaterNumber.nextLargerElement(arr));
    }
}
