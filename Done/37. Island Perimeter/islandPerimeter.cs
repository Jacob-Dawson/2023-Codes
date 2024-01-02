// https://leetcode.com/problems/island-perimeter/
/*

    You are given row x col grid representing a map where grid[i][j] = 1 
    represents land and grid[i][j] = 0 represents water.

    Grid cells are connected horizontally/vertically (not diagonally). 
    The grid is completely surrounded by water, and there is exactly one island 
    (i.e., one or more connected land cells).

    The island doesn't have "lakes", meaning the water inside isn't connected to 
    the water around the island. One cell is a square with side length 1. 
    The grid is rectangular, width and height don't exceed 100. 
    Determine the perimeter of the island.


*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SoloLearn
{
	class Program
	{
		static void Main(string[] args)
		{

			int[,] numbers = { {0,1,0,0}, {1,1,1,0}, {0,1,0,0} }; // change this

            int numbersLength = numbers.Length;

            int numLength = numbers.GetLength(1);

            Console.WriteLine(numLength);

            for(int i=0; i<numbers.GetLength(0); i++){

                String result = "";

                for(int j=0; j<numbers.GetLength(1); j++){

                    result += ""+numbers[i,j];

                }

                Console.WriteLine(""+result);

            }

            Console.WriteLine("--");

            // look horiz and vert
            int numResult = 0;

            for(int i=0; i<numbers.GetLength(0); i++){

                for(int j=0; j<numbers.GetLength(1); j++){

                    if(numbers[i,j] == 1){

                        //Console.WriteLine(lookHoriz(numbers,j,i));
                        //Console.WriteLine(lookVert(numbers,j,i));

                        int sumHoriz = lookHoriz(numbers,j,i);
                        int sumVert = lookVert(numbers,j,i);

                        numResult += (4 + sumHoriz + sumVert);

                        //Console.WriteLine("--");

                    }

                }

            }

            Console.WriteLine(""+numResult);
            Console.WriteLine("");
            Console.WriteLine("");
            Console.WriteLine("Jay 37/50. (2023)");

		}

        static int lookHoriz(int [,] arr,int posX,int posY){

            int maxLength = 0;

            //for(int i=0; i<arr.GetLength(0); i++){

                for(int j=0; j<arr.GetLength(1); j++){

                    if(j == posX){

                        continue;

                    } else if(arr[posY,j] == 1 && posX - j == 1){

                        maxLength--;

                    } else if(arr[posY,j] == 1 && posX - j == -1){

                        maxLength--;

                    }

                }

            //}

            return maxLength;

        }

        static int lookVert(int [,] arr,int posX,int posY){

            int maxLength = 0;

            for(int i=0; i<arr.GetLength(0); i++){

                if(i == posY){

                    continue;

                } else if(arr[i,posX] == 1 && posY - i == 1){

                    maxLength--;

                } else if(arr[i,posX] == 1 && posY - i == -1){

                    maxLength--;

                }

            }

            return maxLength;

        }
	}
}
