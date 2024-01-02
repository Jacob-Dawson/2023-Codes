// 41 / 50

// Bulls and Cows

// https://leetcode.com/problems/bulls-and-cows/description/

public class Program
{
    public static void main(String[] args) {

        String corrNum = "1123"; // change this
        String guess = "0111"; // change this

        System.out.println(corrNum);
        System.out.println(guess);

        char[] corrNumDigits = corrNum.toCharArray();
        char[] guessDigits = guess.toCharArray();

        System.out.println(calculateBulls(corrNumDigits,guessDigits)+"A"+calculateCows(corrNumDigits,guessDigits)+"B");

        System.out.println("");
        System.out.println("Jay 41/50 (2023)");

	}

    public static String calculateBulls(char[] corrNum,char[] guess){

        int bulls = 0;

        for(int i=0; i<4; i++){

            if(corrNum[i] == guess[i]){

                bulls++;

            }

        }

        return ""+bulls;
    }

    public static String calculateCows(char[] corrNum, char[] guess){

        int cows = 0;

        for(int i=0; i<4; i++){

            if(corrNum[i] == guess[i]){

                continue;

            }

            for(int j=0; j<4; j++){

                if(corrNum[i] == guess[j]){

                    cows++;
                    corrNum[i] = 'a';

                }

            }
  

        }

        return ""+cows;

    }

    public static char[] intToArray(int num){

        char[] digits = String.valueOf(num).toCharArray();
        
        return digits;

    }
}