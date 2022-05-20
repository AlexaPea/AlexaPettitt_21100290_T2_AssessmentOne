<?php 

    //database credentials
    $dbhost = "localhost";
    $dbusername = "root";
    $dbpassword = "root";
    $dbname = "assessmentone";

    //make new connection
    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname); 

    //error check
    if($mysqli -> connect_error){
        echo ('Falied to connect to Database: ' . $mysqli -> connect_error); //outputs error
        exit();
    }



?>