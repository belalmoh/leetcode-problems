package project.problems.cyclic_sort;

import java.util.Arrays;

public class CyclicSort {

    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static int[] sort(int[] nums) {
        int i = 0;
        while (i < nums.length) {
            int j = nums[i] - 1; // Calculate the index where the current element should be placed.
            if (nums[i] != nums[j]) // Check if the current element is not in its correct position.
                swap(nums, i, j); // Swap the current element with the one at its correct position.
            else
                i++; // If the current element is already in its correct position, move to the next element.
        }
        return nums;
    }

    public static void main(String[] args) {
        int [] test1 = new int[] {3, 1, 5, 4, 2};
        System.out.println(Arrays.toString(sort(test1)));

        int [] test2 = new int[] {2, 6, 4, 3, 1, 5};
        System.out.println(Arrays.toString(sort(test2)));

        int [] test3 = new int[] {1, 5, 6, 4, 3, 2};
        System.out.println(Arrays.toString(sort(test3)));
    }
}
