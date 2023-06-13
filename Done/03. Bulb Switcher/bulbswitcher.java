/*

There are n bulbs that are initially off. You first turn on all the bulbs, 
then you turn off every second bulb.

On the third round, you toggle every third bulb 
(turning on if it's off or turning off if it's on). 
For the ith round, you toggle every i bulb. For the nth round, 
you only toggle the last bulb.

Return the number of bulbs that are on after n rounds.

Example 1:

Initial = [,,,]
Round 1 = [*,*,*]
Round 2 = [*,,*]
Round 3 = [*,,]

Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.

Example 2:

Input: n = 0
Output: 0

Example 3:

Input: n = 1
Output: 1

@Jay 3/50 (2023)


*/

// 1 = on, 0 = off

import java.util.Arrays;

public class BulbSwitcher
{
    public static void main(String[] args) {

        int amount = 100; // change this 

        for(int j=0; j<=amount; j++){

            int n = j;

            if(n == 0){

                System.out.println("("+n+" bulbs) Total sum of on bulbs: 0");
                continue;

            }

            int bulbs[] = new int[n];

            for(int i=0; i<bulbs.length; i++){

                bulbs[i] = 1;

            }

            for(int i=2; i<=bulbs.length; i++){

                bulbs = BulbSwitch(bulbs,i);

            }

            System.out.println("("+n+" bulbs) Total sum of on bulbs: "+arrSum(bulbs));

        }

	}

    public static int[] BulbSwitch(int[] arr,int n){

        for(int j=0; j<arr.length; j++){

            if((j+1)%n == 0){

                arr[j] = (arr[j]+1)%2;

            }

        }

        return arr;

    }

    public static int arrSum(int[] arr){

        int result = 0;

        for(int j=0; j<arr.length; j++){

            if(arr[j] == 1){

                result += 1;

            }

        }

        return result;

    }
}