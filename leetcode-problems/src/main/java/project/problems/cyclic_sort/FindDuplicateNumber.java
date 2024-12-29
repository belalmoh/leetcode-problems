package project.problems.cyclic_sort;


import java.util.Arrays;

public class FindDuplicateNumber {

    public int findNumber(int[] nums) {

        int[] sorted = Arrays.stream(nums).sorted().toArray();

        for (int i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] == sorted[i + 1]) {
                return sorted[i];
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        FindDuplicateNumber findDuplicateNumber = new FindDuplicateNumber();
        System.out.println(findDuplicateNumber.findNumber(new int[]{3, 1, 3}));
    }
}
