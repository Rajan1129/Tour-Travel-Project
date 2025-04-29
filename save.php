<?php

$sever ="localhost";
$username ="root";
$password ="";
$dbname ="tour&travel";

$con = mysqli_connect($sever, $username, $password, $dbname);

if(!$con)
{
    echo "not connected";
}


$go = $_POST['go'];
$members = $_POST['members'];
$start = $_POST['start'];
$end = $_POST['end']

$sql = "INSERT INTO `form`(`Where you go`, `Members`, `Starting date`, `Ending date`) VALUES ('$go','$members','$start','$end')";

$result= mysqli_query($con , $sql);
if($result)
{
    echo "data submitted";
}
else{
    echo "qerry not submitted...";
}
?>