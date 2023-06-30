/*

    https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

    @Jay 24/50 (2023).

*/

fun main(args: Array<String>) {

    var pos = arrayOf(1,2,3,3,4,4); // <-- edit this

    var even = 0;

    for(i in pos){

        if(i%2 == 0){

            even++;

        }

    }

    print("Minimum Cost: " + Math.min(even,pos.size - even));
    print("\n");
    print("\n");
    print("Jay 24/50 (2023).");
	
}