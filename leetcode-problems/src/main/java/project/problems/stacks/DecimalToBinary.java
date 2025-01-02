package project.problems.stacks;

import java.util.Stack;

public class DecimalToBinary {

    public static String decimalToBinary(int num) {
        StringBuilder sb = new StringBuilder();
        Stack stack = new Stack();


        while(num > 0) {
            stack.push(num % 2);
            num = num / 2;
        }

        while(!stack.isEmpty()) {
            sb.append(stack.pop());
        }

        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(decimalToBinary(10));
        System.out.println(decimalToBinary(15));
        System.out.println(decimalToBinary(7));
        System.out.println(decimalToBinary(100));
    }
}
