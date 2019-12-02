<?php

    include_once '../config/database.php';
    include_once '../models/event-model.php';

    if($_SERVER["REQUEST_METHOD"] =="POST"){
        
        $database = new Database();
        $db = $database->getConnection();

        $email = trim($_POST['email']);
        $password =  trim($_POST['password']); 

        $query = "SELECT Uid FROM user WHERE email = {$email} && password = {$password}";

        $result = $db->prepare($query);

        $result->execute();

        $row = $result->fetch(PDO::FETCH_ASSOC);


        if($row == true){
            http_response_code(200);

        }else{
            http_response_code(400);

        }
    }else{
        echo "Not post";
    }

?>