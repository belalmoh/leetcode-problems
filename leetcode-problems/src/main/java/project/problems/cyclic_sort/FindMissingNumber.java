package project.problems.cyclic_sort;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Comparator;

import static project.problems.cyclic_sort.CyclicSort.swap;

public class FindMissingNumber {

    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static int findMissingNumber(int[] nums) {
        int i = 0;
        while (i < nums.length) {
            if (nums[i] < nums.length && nums[i] != nums[nums[i]])
                swap(nums, i, nums[i]);
            else
                i++;
        }

        // find the first number missing from its index, that will be our required number
        for (i = 0; i < nums.length; i++)
            if (nums[i] != i)
                return i;

        return nums.length;
    }

    public static void main(String[] args) {
        int[] test1 = new int[]{0};
        System.out.println(findMissingNumber(test1));

        int[] test2 = new int[]{8, 3, 5, 2, 4, 6, 0, 1};
        System.out.println(findMissingNumber(test2));
    }
}
