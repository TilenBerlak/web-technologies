<!DOCTYPE html>
<meta charset="utf-8">
<title>Processing GET parameters</title>

<?php 

// var_dump($var) simply outputs the contents of $var, its type and size
// var_dump($_GET);

$first_name = $_GET["first_name"];
$last_name = $_GET["last_name"];

if (empty($first_name) || empty($last_name)) {
    echo "Required paramaters are missing.";
} 
else {
    
    $full_name = $first_name . " " . $last_name;
    $time = date("H:i");
    echo "Hello $full_name, the time is $time.";
}

/*
 * The script should output the following string:
 *  - check if parameters are provided -- if not the script should display an error;
 *      - you can check if a value exists with http://php.net/manual/en/function.isset.php
 *      - you can test if a value is empty with http://php.net/manual/en/function.empty.php
 *  - and output a nicely formatted string using the send variables, for instance:
 *        "Hello $first_name $last_name, the time is <current_time_in_H:i_format>."
*/