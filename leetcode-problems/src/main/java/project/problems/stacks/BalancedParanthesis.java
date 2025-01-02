package project.problems.stacks;

import java.util.ArrayDeque;
import java.util.Deque;

public class BalancedParanthesis {

    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        char[] charArray = s.toCharArray();

        for(int i = 0; i < charArray.length; i++) {
            if(charArray[i] == '(' || charArray[i] == '[' || charArray[i] == '{') { // is opening
                stack.push(charArray[i]);
            } else { // is closing
                if(stack.size() > 0) {
                    char head = stack.peek();

                    if(head == '(' && charArray[i] == ')') stack.pop();
                    else if(head == '[' && charArray[i] == ']') stack.pop();
                    else if (head == '{' && charArray[i] == '}') stack.pop();
                    else return false;
                }
            }
        }

        return stack.size() == 0;
    }

    public static void main(String[] args) {
        BalancedParanthesis balancedParanthesis = new BalancedParanthesis();
        System.out.println(balancedParanthesis.isValid("()"));
        System.out.println(balancedParanthesis.isValid("()[]{}"));
        System.out.println(balancedParanthesis.isValid("(]"));
        System.out.println(balancedParanthesis.isValid("([)]"));
        System.out.println(balancedParanthesis.isValid("{[]}"));
        System.out.println(balancedParanthesis.isValid("{[(])}"));
    }

}
