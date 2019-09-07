<?php

header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: *");

$request = json_decode(file_get_contents("php://input"),1);

$data = array();

$email = 'test@gmail.com';
$pwd   = 'test@123';


//$generateToken =

if($request['email'] == $email && $request['password'] == $pwd){
  $response = array('status' => true);
}
else{
  $response = array('status' => false, 'error' => 'Incorrect login details');
}
echo json_encode($response,true);
exit;

//function




?>
