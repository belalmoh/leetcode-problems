package project.problems.cyclic_sort;

import java.util.Arrays;

public class CyclicSort {

    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static int[] sort(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            while (nums[i] != i + 1) {
                swap(nums, i, nums[i] - 1);
            }
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
