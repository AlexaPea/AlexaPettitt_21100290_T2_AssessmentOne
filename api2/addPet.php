<?php

//Add connection
include 'db_connection.php';

header("Access-Control-Allow-Origin: * "); 
header("Access-Control-Allow-Headers: * "); 

//making is so we can work with recieved input
//First translate it to a string
$request_body = file_get_contents('php://input'); //gets content from http header as php input
$data = json_decode($request_body); // this translates that content into something meaningful that we can use in php

//now we have that info

//now decouple that info
$petName = $data->petName;
$petSpecies = $data->petSpecies;
$petGender = $data->petGender;
$petAge = $data->petAge;
$microchipId = $data->microchipId;
$ownerName = $data->ownerName;
$ownerId = $data->ownerId;
$exportOrigin = $data->exportOrigin;
$exportDestination = $data->exportDestination;

//debug
// echo ($petName . " " . $petSpecies);

//create SQL statement
//insert new user into database
$sql = "INSERT INTO expawts (id, petName, petSpecies, petGender, petAge, microchipId, ownerName, ownerId, exportOrigin, exportDestination) VALUES (NULL,'$petName','$petSpecies','$petGender','$petAge','$microchipId','$ownerName','$ownerId','$exportOrigin','$exportDestination');";

//run statement made above - to do this you need to run the connection and statement
$result = mysqli_query($conn, $sql)

//output error if no result
if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("Success! Your pet has been registered!");
}




?>