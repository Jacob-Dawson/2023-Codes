<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Max Increase to Keep City Skyline</title>
        <style>
            body{

                font-family: 'Arial';
                padding: 0;
                margin: 0;
                background-color: white;
                text-align:center;

            }
        </style>
    </head>
    <body>
    </body>
</html>

<?php 

    // https://leetcode.com/problems/max-increase-to-keep-city-skyline/

    /*

    There is a city composed of n x n blocks, 
    where each block contains a single building shaped like a vertical square prism. 
    You are given a 0-indexed n x n integer matrix grid where grid[r][c] 
    represents the height of the building located in the block at row r and column c.

    A city's skyline is the outer contour formed by all the building when 
    viewing the side of the city from a distance. The skyline from each cardinal 
    direction north, east, south, and west may be different.

    We are allowed to increase the height of any number of buildings by any amount 
    (the amount can be different per building). The height of a 0-height building 
    can also be increased. However, increasing the height of a building should not 
    affect the city's skyline from any cardinal direction.

    Return the maximum total sum that the height of the buildings can be increased 
    by without changing the city's skyline from any cardinal direction.

    Example 1:

    Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
    Output: 35
    Explanation: The building heights are shown in the center of the above image.
    The skylines when viewed from each cardinal direction are drawn in red.
    The grid after increasing the height of buildings without affecting skylines is:
    gridNew = [ [8, 4, 8, 7],
                [7, 4, 7, 7],
                [9, 4, 8, 7],
                [3, 3, 3, 3] ]

                Example 2:

    Input: grid = [[0,0,0],[0,0,0],[0,0,0]]
    Output: 0
    Explanation: Increasing the height of any building will result in the skyline changing.

    Constraints:

    n == grid.length
    n == grid[r].length
    2 <= n <= 50
    0 <= grid[r][c] <= 100


    */

    $mSize = rand(1,6);
    $mNum = 9;

    $grid = buildGrid($mSize,$mNum);//array(array(3,0,8,4),array(2,4,5,7),array(9,2,6,3),array(0,3,1,0));

    $grid2 = $grid;

    // showing the old grid

    echo "Current Grid: <br>";
    printGrid($grid);
    echo "<br>";

    // outputing the result

    $output = 0;

    for($j = 0; $j < count($grid); $j++){

        for($k = 0; $k < count($grid[$j]); $k++){

            $output += checkGrid($grid,$j,$k);

        }

    }

    echo "Output: ".$output."<br>";

    // sorting the grid

    for($j = 0; $j < count($grid); $j++){

        for($k = 0; $k < count($grid[$j]); $k++){

            $grid2[$j][$k] = editGrid($grid,$j,$k);

        }

    }

    echo "<br>";
    echo "Sorted Grid: <br>";
    printGrid($grid2);

    function printGrid($arr){

        foreach($arr as $i){

            foreach($i as $j){

                echo "".$j;

            }

            echo "<br>";

        }

    }

    function checkGrid($arr,$pX,$pY){

        $maxX = $arr[$pX][$pY];

        for($i = 0; $i < count($arr[$pX]); $i++){

            if($arr[$pX][$i] > $maxX){

                $maxX = $arr[$pX][$i];

            }

        }

        $maxY = $arr[$pX][$pY];

        for($i = 0; $i < count($arr[$pY]); $i++){

            if($arr[$i][$pY] > $maxY){

                $maxY = $arr[$i][$pY];

            }

        }

        $result = $maxX < $maxY ? $maxX : $maxY;
        $difference = $result - $arr[$pX][$pY];
        
        return $difference;

    }

    function editGrid($arr,$pX,$pY){

        $maxX = $arr[$pX][$pY];

        for($i = 0; $i < count($arr[$pX]); $i++){

            if($arr[$pX][$i] > $maxX){

                $maxX = $arr[$pX][$i];

            }

        }

        $maxY = $arr[$pX][$pY];

        for($i = 0; $i < count($arr[$pY]); $i++){

            if($arr[$i][$pY] > $maxY){

                $maxY = $arr[$i][$pY];

            }

        }

        $result = $maxX < $maxY ? $maxX : $maxY;
        
        return $result;

    }

    function buildGrid($maxSize,$maxNum){

        $arr = array();

        for($j = 0; $j < $maxSize; $j++){

            $temp = array();

            for($k = 0; $k < $maxSize; $k++){

                $randNum = rand(0,$maxNum);

                array_push($temp,$randNum);
                
            }

            array_push($arr,$temp);

        }

        return $arr;
        
    }

    echo "<br>";
    echo "Jay 11/50 (2023)";

?>