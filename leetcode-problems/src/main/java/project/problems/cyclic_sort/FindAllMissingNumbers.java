package project.problems.cyclic_sort;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindAllMissingNumbers {

    public List<Integer> findNumbers(int[] nums) {
        List<Integer> missingNumbers = new ArrayList<>();
        int[] distinct = Arrays.stream(nums).distinct().toArray();

        for(int i = 1; i <= nums.length; i++) {
            int finalI = i;
            if(Arrays.stream(distinct).noneMatch(j -> j == finalI)) {
                missingNumbers.add(i);
            }
        }

        return missingNumbers;
    }

    public static void main(String[] args) {
        FindAllMissingNumbers missingNumbers = new FindAllMissingNumbers();
        int[] test1 = new int[]{2, 3, 1, 8, 2, 3, 5, 1};
        System.out.println(missingNumbers.findNumbers(test1));

        int[] test2 = new int[]{2, 4, 1, 2};
        System.out.println(missingNumbers.findNumbers(test2));

        int[] test3 = new int[]{2, 3, 2, 1};
        System.out.println(missingNumbers.findNumbers(test3));
    }

}
