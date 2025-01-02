package project.problems.stacks;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Stack;

public class ReverseString {
    public String reverseString(String s) {
        Stack<Character> stack = new Stack<>();

        char[] charArray = s.toCharArray();

        for(int i = 0; i < charArray.length; i++) {
            stack.push(charArray[i]);
        }

        String result = "";

        while(!stack.isEmpty()) {
            result += stack.pop();
        }

        return result;
    }

    public static void main(String[] args) {
        ReverseString reverseString = new ReverseString();
        System.out.println(reverseString.reverseString("hello"));
    }
}
